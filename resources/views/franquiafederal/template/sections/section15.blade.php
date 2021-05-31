<section class="" style="background-image: url('{{ asset("assets/images/dummy-image-small.jpg") }}');    background-attachment: fixed;
            background-size: cover;
            background-repeat: no-repeat;">
    <div class="overlay-7 pt-100 pb-100">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="section-title">
                        <div class="main-title meain-title-bg-white">
                            <div class="title-main-page">
                                <h4>Contact Us</h4>
                                <p>Lorem ipsum dolor sit amet</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4">
                    <div class="contact-info d-flex">
                        <div class="w-25">
                            <div class="contact-icon">
                                <i class="fas fa-phone"></i>
                            </div>
                        </div>
                        <div class="contact-text w-75">
                            <h2>Phone</h2>
                            <p>(+881) 111 222 333</p>
                            <p>(+881) 111 222 333</p>
                        </div>
                    </div>
                    <div class="contact-info d-flex">
                        <div class="w-25">
                            <div class="contact-icon">
                                <i class="far fa-envelope-open"></i>
                            </div>
                        </div>
                        <div class="contact-text w-75">
                            <h2>Email</h2>
                            <p>info@domain.com</p>
                            <p>name@domain.com</p>
                        </div>
                    </div>
                    <div class="contact-info d-flex mb-0">
                        <div class="w-25">
                            <div class="contact-icon">
                                <i class="fas fa-map-marker-alt"></i>
                            </div>
                        </div>
                        <div class="contact-text w-75">
                            <h2>Address</h2>
                            <p>123 New Yourk D Block 1100, <br> Street 2011 USA</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="contact-form">
                        <!--Contact Form-->
                        <form id='contact-form' method='POST'><input type='hidden' name='form-name' value='contactForm' />
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="text" name="name" class="form-control" id="first-name" placeholder="Enter Your Name *" required="required">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="email" name="email" class="form-control" id="email" placeholder="Enter Your Email *" required="required">
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <input type="text" name="email" class="form-control" id="subject" placeholder="Enter Your Subject *" required="required">
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <textarea rows="6" name="message" class="form-control" id="description" placeholder="Enter Your Message *" required="required"></textarea>
                                    </div>
                                </div>
                                <div class="col-md-12 text-center">
                                    <!--contact button-->
                                    <button id="contact-submit" class="taso-btn">
                                        Send Message
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
