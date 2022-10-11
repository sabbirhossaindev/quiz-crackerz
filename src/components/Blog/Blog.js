import React from 'react';

const Blog = () => {
    return (
        <section>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box m-5">
                <div className="collapse-title text-xl font-medium">
                1. what is the purpose of react router?
                </div>
                <div className="collapse-content"> 
                    <p>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box m-5">
                <div className="collapse-title text-xl font-medium">
                2. How Does context API work?
                </div>
                <div className="collapse-content"> 
                    <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box m-5">
                <div className="collapse-title text-xl font-medium">
                3. what is the purpose of react router?
                </div>
                <div className="collapse-content"> 
                    <p> The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component. <br />
                    const refContainer = useRef(initialValue); </p>
                </div>
            </div>
        </section>
    );
};

export default Blog;