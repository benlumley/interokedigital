---
title: Thank You - Interoke Digital
description: Thank you for getting in touch. I'll respond to your message soon.
---
@extends('_layouts.master')

@section('content')
    @include('_partials.sidebar')
    <div class="container-fluid p-0">
        <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
            <div class="w-100 text-center">
                <h1 class="mb-4">
                    <i class="fa fa-check-circle text-success mr-3"></i>
                    Thank You!
                </h1>

                <p class="lead mb-4">
                    Your message has been sent successfully. I'll get back to you as soon as possible.
                </p>

                <p class="mb-5">
                    In the meantime, feel free to explore my <a href="/#experience">projects</a> or check out my
                    <a href="/#skills">skills and experience</a>.
                </p>

                <a href="/" class="btn btn-primary btn-lg">
                    <i class="fa fa-home mr-2"></i>Return to Home
                </a>
            </div>
        </section>
    </div>
@endsection
