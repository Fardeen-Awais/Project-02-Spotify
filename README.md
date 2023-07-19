# Spotify Clone project
This is the spofify clone that i made for learning purpose

## Getting Started

### Future Helps 
- Sidebar component ([commit f2862c6](https://github.com/Fardeen-Awais/Project-02-Spotify/commit/f2862c6))
- Button Wrapper component ([commit 14057a7](https://github.com/Fardeen-Awais/Project-02-Spotify/commit/14057a7))
- Adding a proper header with custom style twMerge ([commit 39ea1c1](https://github.com/Fardeen-Awais/Project-02-Spotify/commit/39ea1c1))
- Adding authetication providers ([commit a4822c5](https://github.com/Fardeen-Awais/Project-02-Spotify/commit/a4822c5))
- Simple model with Redix ([commit 12bfaa6](https://github.com/Fardeen-Awais/Project-02-Spotify/commit/12bfaa6))
- Information about zustand and modals Provider ([commit 43bd282](https://github.com/Fardeen-Awais/Project-02-Spotify/commit/43bd282))

### Built With
- Next.js - The web framework used
- Typescript - For Type checking
- Supabase - A database
- Tailwind - For Styling
- mwMerge - Avoiding unwanted merge
- React-icons - Best and all React icons
- Redix UI - The ui library

### Commit details

In Providers, ModalProvider.tsx
We have an AuthModal Component. In Auth model component we import modal and give it the props to the modal component. 
In modal component, We have fully styled component which require these props.

ModalProvider -> Authmodal -> Modal 

We have Hooks for statemanagement using zustand in useAuthmodal. 

Let's break it down piece by piece.

```import { create } from "zustand";```
This line imports the create function from the zustand library. zustand is a state management library for React. It allows us to create and manage state in our React components.
```
interface AuthModalStore {
    isOpen: Boolean
    onOpen: ()=> void
    onClose: () => void
}
```
This line defines an interface called AuthModalStore. This interface defines the state that our modal will have. The state consists of three properties:

isOpen: A boolean value that indicates whether the modal is open or closed.
onOpen: A function that is called when the modal is opened.
onClose: A function that is called when the modal is closed.
```
const useAuthModal = create<AuthModalStore>((set)=>({ isOpen:false, onOpen: ()=> set({isOpen:true}), onClose:()=> set({isOpen:false})}))
```

This line creates a function called useAuthModal. This function returns a hook that we can use in our React components. The hook takes a single argument, which is a function that is used to update the state of the modal. The hook returns an object that contains the three properties defined in the AuthModalStore interface.

Here's how we can use the useAuthModal hook in a React component:

JavaScript
```
const App = () => {
  const [isOpen, setIsOpen] = useAuthModal();

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpen}>Open modal</button>
      {isOpen && <AuthModal onClose={handleClose} />}
    </div>
  );
};
```
In this component, we use the useAuthModal hook to create a variable called isOpen. This variable stores the state of the modal. We also use the useAuthModal hook to create two functions called handleOpen and handleClose. These functions are used to open and close the modal.

Finally, we render a button that calls the handleOpen function when it is clicked. We also render a modal component if the isOpen variable is true. The modal component will close when the handleClose function is called.

### Authors
- Fardeen Founder of Alfarnex



