# Quanti Angular Interview Task - Simple TodoList

## General info

Your task is to implement a simple frontend application which is connected to REST API.

1. We have prepared a base project for you, which is available at https://github.com/QuantiCZ/angular-entry-test. It roughly outlines what we expect you to implement. Clone it to a local repository.
2. In your local git repository, create a separate feature branch for your implementation. Commit all your code exclusively to that branch. Name your branch feature/your-first-and-last-name, e.g. feature/john-doe.
3. Implement basic function of TodoList (see requirements below).
4. When you are done, push the branch to our repository and create a Merge Request from your branch to master. Assign the merge request to xxx xxx (xxx@quanti.cz), and send us an email.
5. You will get a code review from one of our developers. You may get several small comments on your Merge Request and be asked to improve it — don't be alarmed, that is a part of the task. We won't ask for drastic changes.

Don't spend an excessive amount of time on your implementation: the task is intended to take a couple of hours of your time.

## What we want you to implement

We have prepared mock REST API. You should create basic application which uses this API. We dont care about visual style. You could use Angular Material for better look.

Your task is to implement two modules. One with components which will provide all CRUD operations for Todos and one which will provide all CRUD operations for users. You should cover all these simple user stories:

- Display all Todos
- Create new Todo
- Change Todo assignee
- Mark Todo as completed
- Delete Todo
- Display all Users
- Create new User
- Update User information
- Delete User

However it is not necessary to implement all these cases. What is more important is to show us how good you are at Angular. Here is list what we would love to see in your application (but if you are not familiar with some of these don't worry - just do your best).

- At least one lazy loaded module
- Guard
- Custom pipe
- Component architecture
- Content projection
- Unit tests (at least one component covered by Unit tests)
- Reactive forms
- State Management (library of your choice)
- Routing

### There are two large requirements:

1. Write your application in Angular 15 (or higher). We have predefined the libraries we think you may want, but you are free to change them.
2. Connect to our mock ToDo API. The API is already implemented, you only need to boot it up locally. To do so, run `yarn api` at the root folder. API will be hosted at http://localhost:3000 . Documentation on API features can be found here - https://github.com/typicode/json-server#getting-started

Other than that, you are not restricted in any way! You may use any libraries you like, and change or rewrite the template we have predefined for you.
