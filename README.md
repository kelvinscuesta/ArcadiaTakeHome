# ArcadiaTakeHome

Readme for Arcadia Take Home exercise, a small React CRUD application for contact management.

## Running the application/setup

- `npm i` to install dependencies
- `npm run start` to boot up the front end development server and the server together.

### Goals

1. Fully comprehend the server,tests, and the faker package.
2. Hit MVP features.
3. Bundle the front end and server together. (Parcel vs Webpack)
4. Make it pretty/accessible/responsive (will use Tachyons UI Framework)
5. Consider tests for my front end application and edge cases
6. Consider stretch goals and include in notes section below

### Plan/Initial Thought Process

First plan of attack is to understand the server/routes, the faker package, and what data I am receiving from the server and what I need to send.

Second, get the core CRUD functionality/MVP features for the client, starting with the display and what calls to make to the server.

I intend to use Parcel to achieve goal number 3, the CRUD app has basic requirements and I do not imagine it needing the exhaustive options webpack provides. Using parcel, would probably make it easy to setup and run both server and app together.

I found this UI framework _Tachyons_ that I enjoyed using previously and intend to use it to make the app responsive, accessible, and look good. It hits all those goals.

Finally, if I have time I would like to write tests for the different React components, and last write down what I didn't get to doing/what may be different at scale.

### Final Notes

- Finished all of the requirements with the multiple endpoints.
- So 3 of the goals in getting the mvp and bundling front end and server together at least in development
- Stretch Features/Thoughts/bugs I faced:
  - Filter button
  - Login/auth for multiple users and contacts
  - State Management
    - I brazenly started the assignment without paying much attention to state management. Thought I could just manage prop drilling just a few levels. It works, for now, but if I were to reorganize, definitely having a global store with context might make more sense and using the unique id as an easy way to find/parse which contact we are editing.
  - More research on modals and which ui framework to use.
    - Spent time considering the pros and cons to multiple implementations
      - React Bootstrap vs Semantic UI vs Material UI
      - Ended up going Material UI for Modal and small package size
      - React bootstrap wanted me to include bootstrap which was overwriting how buttons were appearing
  - More research into parcel and issues with proxying and async/await more new JS features.
  - Without plan from the start for CSS/ mockup difficult to find best way of presenting the data!
