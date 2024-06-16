# Virtual DOM, Fibre and reconciliation
createRoot( ) -  method behind scene - Creates DOM like structure for us. Just like the one that browser have. 

Why to create this DOM? - Because it compares its own DOM and Browser DOM , then updates only those thing which are actually updated in UI. On the other hand our browser does it removes whole DOM and Repaints whole DOM known as page reload.

But in Virtual DOM, Whole DOM can be traced and tracked in a tree like structure. And whatever values are changed It just remove those values and attach new in Virtual DOM.

Now suppose an element like button is dependent of Network. Button text will update suppose, now while Virtual DOm was about to update that change - we get another update for button text - this when done repitetively - so it will get updated 3-4 times respectively. But if could stop with some optimised algorithm - then we would have avoided 2nd 3rd update and directly updated the 4th update. So is it possible ? - to not immediately update things , to update them after applying some optimized algorithm. So this is what came to mind of React team that every UI need not to be instantaneously updated , it might be the case that we have recieved some update calls but we could drop those repetitive calls and only send new call - then a better algorithm can be designed which is of UI updation.

https://github.com/acdlite/react-fiber-architecture

**React Fiber Architecture**

**Introduction**

React Fiber is an ongoing reimplementation of React's core algorithm. It is the culmination of over two years of research by the React team.

The goal of React Fiber is to increase its suitability for areas like animation, layout, and gestures. Its headline feature is **incremental rendering**: the ability to split rendering work into chunks and spread it out over multiple frames.

Other key features include the ability to pause, abort, or reuse work as new updates come in; the ability to assign priority to different types of updates; and new concurrency primitives.

**Prerequisites**

I strongly suggest that you are familiar with the following resources before continuing:

- [React Components, Elements, and Instances](https://facebook.github.io/react/blog/2015/12/18/react-components-elements-and-instances.html) - "Component" is often an overloaded term. A firm grasp of these terms is crucial.
- [Reconciliation](https://facebook.github.io/react/docs/reconciliation.html) - A high-level description of React's reconciliation algorithm.
- [React Basic Theoretical Concepts](https://github.com/reactjs/react-basic) - A description of the conceptual model of React without implementation burden. Some of this may not make sense on first reading. That's okay, it will make more sense with time.
- [React Design Principles](https://facebook.github.io/react/contributing/design-principles.html) - Pay special attention to the section on scheduling. It does a great job of explaining the *why* of React Fiber.

• [Reconciliation](https://facebook.github.io/react/docs/reconciliation.html) - A high-level description of React's reconciliation algorithm.
It is basically react’s algorithm which reconsiders the changes and what to update and what to not update, it is a recursive algo.

**What is reconciliation?**

*reconciliation* The algorithm React uses to diff one tree with another to determine which parts need to be changed.

*update* A change in the data used to render a React app. Usually the result of `setState`. Eventually results in a re-render.

The central idea of React's API is to think of updates as if they cause the entire app to re-render. This allows the developer to reason declaratively, rather than worry about how to efficiently transition the app from any particular state to another (A to B, B to C, C to A, and so on).

Actually re-rendering the entire app on each change only works for the most trivial apps; in a real-world app, it's prohibitively costly in terms of performance. React has optimizations which create the appearance of whole app re-rendering while maintaining great performance. The bulk of these optimizations are part of a process called **reconciliation**.

Reconciliation is the algorithm behind what is popularly understood as the "virtual DOM." A high-level description goes something like this: when you render a React application, a tree of nodes that describes the app is generated and saved in memory. This tree is then flushed to the rendering environment — for example, in the case of a browser application, it's translated to a set of DOM operations. When the app is updated (usually via `setState`), a new tree is generated. The new tree is diffed with the previous tree to compute which operations are needed to update the rendered app.

Although Fiber is a ground-up rewrite of the reconciler, the high-level algorithm [described in the React docs](https://facebook.github.io/react/docs/reconciliation.html) will be largely the same. The key points are:

- Different component types are assumed to generate substantially different trees. React will not attempt to diff them, but rather replace the old tree completely.

      -  Some component need not to be compared, we know they will change      entirely, so we don’t compare and directly update the whole component tree completely.

- Diffing of lists is performed using keys. Keys should be "stable, predictable, and unique."  #Interview  -  Array is looped to render in list or buttons or paragraphs, so here comes the concept of keys , we should use keys - because in Fibre the new algo written - in it if we want to improve list’s performance, then on every iteration we have to use keys.

The key points are:

- In a UI, it's not necessary for every update to be applied immediately; in fact, doing so can be wasteful, causing frames to drop and degrading the user experience.
- Different types of updates have different priorities — an animation update needs to complete more quickly than, say, an update from a data store.
- A push-based approach requires the app (you, the programmer) to decide how to schedule work. A pull-based approach allows the framework (React) to be smart and make those decisions for you.

**What is a fiber?**

We're about to discuss the heart of React Fiber's architecture. Fibers are a much lower-level abstraction than application developers typically think about. If you find yourself frustrated in your attempts to understand it, don't feel discouraged. Keep trying and it will eventually make sense. (When you do finally get it, please suggest how to improve this section.)

We've established that a primary goal of Fiber is to enable React to take advantage of scheduling. Specifically, we need to be able to

- pause work and come back to it later.
- assign priority to different types of work.
- reuse previously completed work.
- abort work if it's no longer needed.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
