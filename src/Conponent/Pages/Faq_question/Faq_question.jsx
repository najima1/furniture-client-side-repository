import React from "react";

const Faq_question = () => {
  return (
    <div className="container py-2 md:py-11">
      <h1 className="text-center py-2">Frequently asked questions</h1>

      <div>
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            1. What are the different ways to manage a state in a React
            application?
          </div>
          <div className="collapse-content">
            <p>
              There are several other ways to manage states in React, including
              the use of: Hooks . React Context API . Apollo Link State .
            </p>
          </div>
        </div>

        <div
          tabIndex={1}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            2. How does prototypical inheritance work?
          </div>
          <div className="collapse-content">
            <p>
              The Prototypal Inheritance is a feature in javascript used to add
              methods and properties in objects. It is a method by which an
              object can inherit the properties and methods of another object.
            </p>
          </div>
        </div>

        <div
          tabIndex={2}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            3. What is a unit test? Why should we write unit tests?
          </div>
          <div className="collapse-content">
            <p>
              {" "}
              Unit Testing is a type of software testing where individual units
              or components of a software are tested .
              <hr />
              Unit testing ensures that all code meets quality standards before
              it's deployed . This ensures a reliable engineering environment
              where quality is paramount. Over the course of the product
              development life cycle, unit testing saves time and money, and
              helps developers write better code, more efficiently.
            </p>
          </div>
        </div>

        <div
          tabIndex={3}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            4. React vs. Angular vs. Vue?
          </div>
          <div className="collapse-content">
            <h1 className="text-teal-400">Angular vs React</h1>
            <p>
              If the choice you’re making is based on Angular vs React alone,
              then you’ll simply need to consider the pros and cons discussed
              for those libraries in this post. But overall, keep in mind that
              both libraries can be used for mobile and web apps, while Angular
              is generally better for more complex apps that are
              enterprise-ready. React often requires extra modules and
              components, which keeps the core library small, but means there’s
              extra work involved when incorporating outside tools. Angular, on
              the other hand, is more of a full-fledged solution that doesn’t
              require extras like React often does, though it does have a
              steeper learning curve for its core compared to React. React is
              more suitable for intermediate to advanced JavaScript developers
              who are familiar with concepts from ES6 and up, while Angular
              favors those same developers who are also familiar with
              TypeScript.
            </p>
            <hr />
            <h1 className="py-4 text-teal-300">React vs Vue</h1>
            <p>
              The choice between React vs Vue is often debated and it’s not an
              easy one. Vue has a vibrant and ever-growing community and has
              taken over popularity vs. React in many respects. React developers
              are still churning out lots of new components and extras, so
              there’s no sign that React is on the decline either. Vue is
              generally more suited to smaller, less complex apps and is easier
              to learn from scratch compared to React. Vue can be easier to
              integrate into new or existing projects and many feel its use of
              HTML templates along with JSX is an advantage. Overall, Vue might
              be the best choice if you’re a newer developer and not as familiar
              with advanced JavaScript concepts, while React is quite well
              suited for experienced programmers and developers who have worked
              with object-oriented JavaScript, functional JavaScript, and
              similar concepts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq_question;
