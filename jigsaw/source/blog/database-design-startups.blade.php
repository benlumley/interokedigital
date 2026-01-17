---
title: Database Design for Startups: Getting the Foundation Right
description: Essential database design principles for startup applications, covering normalization, indexing, and when to denormalize for performance.
date: 2025-04-12
slug: database-design-startups
isBlogPage: true
---
@extends('_layouts.blog')

@section('postContent')
    <p class="lead">
        Your database design is the foundation of your application. Get it wrong, and you'll be fighting performance issues
        and data inconsistencies forever. Get it right, and scaling becomes much easier. Here's what I've learned building
        databases for startups over the past 15 years.
    </p>

    <h2>Start Normalized, Denormalize When Needed</h2>
    <p>
        Begin with a properly normalized database. This means:
    </p>
    <ul>
        <li>No duplicate data</li>
        <li>Each piece of information stored once</li>
        <li>Relationships defined through foreign keys</li>
        <li>Data integrity enforced at the database level</li>
    </ul>

    <p>
        Normalization prevents data inconsistencies and makes your database easier to maintain. Don't skip this step thinking
        you'll optimize later. It's much harder to normalize a messy database than to denormalize a clean one.
    </p>

    <h2>Index Strategically</h2>
    <p>
        Indexes are crucial for performance, but too many indexes slow down writes. Index:
    </p>
    <ul>
        <li><strong>Foreign keys:</strong> Always. These are used in joins constantly.</li>
        <li><strong>Columns used in WHERE clauses:</strong> If you frequently filter by status, index it.</li>
        <li><strong>Columns used for sorting:</strong> If you often order by created_at, index it.</li>
        <li><strong>Composite indexes:</strong> For queries that filter by multiple columns.</li>
    </ul>

    <p>
        In Laravel, this is straightforward with migrations:
    </p>

    <pre class="bg-light p-3 rounded"><code>Schema::table('orders', function (Blueprint $table) {
    $table->index(['user_id', 'status']); // Composite index
    $table->index('created_at'); // For sorting
});</code></pre>

    <h2>Use the Right Data Types</h2>
    <p>
        Choose appropriate data types. This affects both storage and performance:
    </p>
    <ul>
        <li><strong>Use INT for IDs:</strong> Not VARCHAR. Much faster for joins.</li>
        <li><strong>Use ENUM sparingly:</strong> They're fast but hard to change. Consider a statuses table instead.</li>
        <li><strong>Use JSON columns wisely:</strong> Great for flexible data, but harder to query.</li>
        <li><strong>Use TIMESTAMPS:</strong> Laravel's timestamps are perfect for most cases.</li>
    </ul>

    <h2>Plan for Soft Deletes</h2>
    <p>
        Most applications need to "delete" records without actually removing them. Laravel's soft deletes are perfect for this:
    </p>

    <pre class="bg-light p-3 rounded"><code>Schema::table('users', function (Blueprint $table) {
    $table->softDeletes(); // Adds deleted_at column
});

// In your model
use SoftDeletes;

// Now $user->delete() sets deleted_at instead of removing the row</code></pre>

    <p>
        This allows you to restore data, maintain referential integrity, and keep audit trails.
    </p>

    <h2>Handle Relationships Properly</h2>
    <p>
        Define relationships clearly in your database and in Laravel:
    </p>

    <pre class="bg-light p-3 rounded"><code>// Database: orders table has user_id foreign key
// Laravel model:
class Order extends Model
{
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}

// Use eager loading to avoid N+1 queries:
$orders = Order::with('user')->get(); // One query, not N+1</code></pre>

    <h2>When to Denormalize</h2>
    <p>
        Sometimes you need to denormalize for performance. Common cases:
    </p>
    <ul>
        <li><strong>Counts:</strong> Store comment_count on posts table instead of counting every time</li>
        <li><strong>Aggregates:</strong> Store total_amount on orders instead of summing line items</li>
        <li><strong>Frequently accessed data:</strong> Store user name on orders for faster display</li>
    </ul>

    <p>
        Use Laravel's model events to keep denormalized data in sync:
    </p>

    <pre class="bg-light p-3 rounded"><code>class Comment extends Model
{
    protected static function booted()
    {
        static::created(function ($comment) {
            $comment->post->increment('comment_count');
        });

        static::deleted(function ($comment) {
            $comment->post->decrement('comment_count');
        });
    }
}</code></pre>

    <h2>Migration Strategy</h2>
    <p>
        Use Laravel migrations for all schema changes. This gives you:
    </p>
    <ul>
        <li>Version control for your database</li>
        <li>Easy deployment across environments</li>
        <li>Rollback capability</li>
        <li>Team collaboration</li>
    </ul>

    <p>
        Never make manual database changes. Always use migrations.
    </p>

    <h2>Common Mistakes to Avoid</h2>
    <ul>
        <li><strong>Over-normalizing:</strong> Don't create tables for single columns</li>
        <li><strong>Under-indexing:</strong> Your queries will be slow</li>
        <li><strong>Ignoring foreign keys:</strong> They enforce data integrity</li>
        <li><strong>Storing calculated values:</strong> Sometimes you need to, but be careful</li>
        <li><strong>No timestamps:</strong> You'll want created_at/updated_at eventually</li>
    </ul>

    <h2>Real-World Example</h2>
    <p>
        I worked with a startup that had performance issues from day one. The problem? Their database design:
    </p>
    <ul>
        <li>No indexes on foreign keys</li>
        <li>Storing full user objects in JSON columns instead of relationships</li>
        <li>No timestamps, making it impossible to track changes</li>
        <li>Over-normalized to the point where simple queries required 5+ joins</li>
    </ul>

    <p>
        We redesigned the database, added proper indexes, and performance improved 10x. The application went from unusable
        to fast, and scaling became possible.
    </p>

    <h2>The Bottom Line</h2>
    <p>
        Good database design is invisible when it's right and painfully obvious when it's wrong. Take time to design
        your schema properly. Use migrations, add indexes, define relationships, and plan for growth. Your future self
        will thank you.
    </p>

    <p>
        If you're building a startup application and need help with database design,
        <a href="/#contact">get in touch</a>. I help startups in Bath, Bristol, and across the UK build solid database
        foundations for their applications.
    </p>
@endsection
