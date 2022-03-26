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
                                <h4>1. How react works?</h4>

                            </button>
                        </h2>
                        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                <p>
                                    React is a javascript library. The rest of the application is downloaded in the browser and the rendering process begins.React is a declarative, efficient, and flexible JavaScript library for building user interfaces. At its very core, React just maintains a tree for you and it will do efficient diff computations on the nodes. React.js is generally thought of as the view layer in an application.It is maintained by Facebook.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                <h4>2. How useState works?</h4>
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                <p>
                                    Hooks are a new addition in React 16.8. The useState() is a Hook that allows you to have state variables in functional components. The useState hook is a special function that takes the initial state as an argument and returns an array of two entries. useState is a hook that lets you add state to a functional component. The first element is the initial state and the second one is a function that is used for updating the state.
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