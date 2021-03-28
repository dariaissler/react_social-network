import profileReducer ,{addPostActionCreator} from './profileReducer';



it('new post should be added', () => {
  let action = addPostActionCreator("daria issler")
  let state = {
    posts : [
      {id:1, message: 'Hi, how is life, bb?' ,likesCounts: 12},
      {id:2, message: 'It is my first post !!!' , likesCounts: 124},
      {id:4, message: 'I am gonna tell you smth about my life..' , likesCounts: 17},
    ]
  };
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(4); 
});

