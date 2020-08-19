import React from 'react'

// const numbers = [1, 2, 3, 4, 5];
// const doubled = numbers.map((number) => number * 2);
// console.log(doubled)

// Transforming arrays into lists of 'elements'

// function ListItem(props) {
    //Correct There is no need to specify the key here:
//     return <li>{props.value}</li>
// }

// function NumberList(props) {
//     const numbers = props.numbers;
//     const listItems = numbers.map((number) =>
//         //Correct! Key should be specified inside the array
//         <ListItem key={number.toString()} value={number} />

        //Old code, but same as the above, almost... -.-
        // <li key={number.toString()}>
        //     {number}
        // </li>
//     );
//     return (
//         <ul>{listItems}</ul>
//     );
// }

// const numbers = [2, 4, 6, 8, 0];

// function Math() {
//     return (
//         <NumberList numbers={numbers} />
//     );
// }

// export default Math;

//---------------------------- New line of code ------------------------------

function Blog(props) {
    const sidebar = (
        <ul>
            {props.posts.map((post) =>
                <li key={post.id}>
                    {post.title}
                </li>
            )}
        </ul>
    );
    const content = props.posts.map((post) =>
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>
    );
    return (
        <div>
            {sidebar}
            <hr />
            {content}
        </div>
    );
}

const posts = [
    {id: 1, title: 'Hello React', content: 'Welcome to the Jungle'},
    {id: 2, title: 'Outpost', content: 'You can enter the jungle with npm'}
]

function JungleLaw() {
    return (
        <Blog posts={posts} />
    );
}

export default JungleLaw;
