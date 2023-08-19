export default function logger(reducer) {
    return (preState, action, args) => {
        console.group(action);
        console.log('Prev State : ', preState);
        console.log('Action Arguments : ', args);
        const newState = reducer(preState, action, args)

        console.log('Next State : ', newState);
        console.groupEnd();
        return newState
    }
}