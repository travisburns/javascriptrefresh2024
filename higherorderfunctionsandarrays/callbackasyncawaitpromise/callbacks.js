const posts = [
    {title: 'Post one', body: 'This is post one' },
    {title: 'Post two', body: 'This is post two' },
];


function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index)=>{
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;

    }, 1000);
}


function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false;


            if(!error) {
                resolve();
            } else {
                reject('Error: something went wrong');
            }
            callback();
        }, 2000);
    });

   
}



createPost({ title: 'Post three', body: 'This is post three' }, getPosts).then(getPosts);
                                                                