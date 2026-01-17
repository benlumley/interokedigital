<div id="contact-success" class="alert alert-success d-none">
    <i class="fa fa-check-circle mr-2"></i>
    <strong>Thank you!</strong> Your email client should open. If it doesn't, please email us directly at
    <a href="mailto:{{ $page->email }}">{{ $page->email }}</a>
</div>

<form id="contact-form" data-email="{{ $page->email }}">
    <div class="form-group">
        <label for="name">Name</label>
        <input
            type="text"
            class="form-control"
            id="name"
            name="name"
            required
        >
    </div>
    <div class="form-group">
        <label for="email">Email</label>
        <input
            type="email"
            class="form-control"
            id="email"
            name="email"
            required
        >
    </div>
    <div class="form-group">
        <label for="message">Tell me about your project</label>
        <textarea
            class="form-control"
            id="message"
            name="message"
            rows="4"
            required
        ></textarea>
    </div>
    <button type="submit" class="btn btn-primary">
        <i class="fa fa-paper-plane mr-2"></i>Send Message
    </button>
    <p class="small text-muted mt-2">
        <i class="fa fa-envelope mr-1"></i>
        This will open your email client to send the message.
    </p>
</form>
