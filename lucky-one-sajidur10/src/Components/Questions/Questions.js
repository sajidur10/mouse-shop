import React from 'react';
import './Questions.css'

const Questions = () => {
    return (
        <section class="container my-5" id="questions">
            <h1 class="text-center fw-bolder">Frequently Asked Questions
            </h1>

            <div class="accordion-w ">
                <div class="accordion accordion-flush ." id="accordionFlushExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingOne">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                <h4>1. How does javascript work?</h4>

                            </button>
                        </h2>
                        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                <p>
                                    JavaScript is a scripting language. It implements complex features on web pages. It is
                                    an interpreted language. Which means it does not need a compiler to translate. It gives
                                    line by line output. It works for cross-platform.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                <h4>2. What is the difference between local storage and session storage?</h4>
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                <p>1.Session storage and local storage are almost the same but the difference is the storage
                                    time..</p>
                                <p>2. The session storage data is deleted after closing the browser but The local storage
                                    data is not deleted after closing the browser.</p>
                                <p>
                                    3. The Name of session storage API is sessionStorage but the Name of local storage API
                                    is localStorage .
                                </p>
                                <p>
                                    4.Session Storage and local storage data stored on the user's device but the difference
                                    is the storage time.
                                </p>
                                <p>
                                    5. Session Storage is Good for instant use but Local storage is good for long time use.
                                </p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default Questions;