let performGetRequest1 = () => {
    const partialUrl = 'http://jsonplaceholder.typicode.com/';
    const resultElem = document.querySelector('#getResult1');
    resultElem.innerHTML = '';

    axios.get(partialUrl + 'todos')
        .then((response) => {
            resultElem.innerHTML = generateSuccessHTMLOutput(response);
        })
        .catch((error) => {
            resultElem.innerHTML = generateErrorHTMLOutput(error);
        })
}

let performGetRequest2 = () => {
    const partialUrl = 'http://jsonplaceholder.typicode.com/';
    const resultElem = document.querySelector('#getResult2');
    const todoId = document.querySelector('#todoId').value;
    resultElem.innerHTML = '';

    axios.get(partialUrl + 'todos', {
        params : {
            id: todoId
        }
    })
    .then((response) => {
        resultElem.innerHTML = generateSuccessHTMLOutput(response);
    })
    .catch((error) => {
        resultElem.innerHTML = generateErrorHTMLOutput(error);
    })
}

let clearOutput = () => {
    // pending
}

let performPostRequest = (e) => {
    e.preventDefault();
    const partialUrl = 'http://jsonplaceholder.typicode.com/';
    const resultElem = document.querySelector('#postResult');
    const todoTitle = document.querySelector('#todoTitle').value;
    resultElem.innerHTML = '';

    axios.post(partialUrl + 'todos', {
        userId: '1',
        title: todoTitle,
        completed: false
    })
    .then((response) => {
        resultElem.innerHTML = generateSuccessHTMLOutput(response);
    })
    .catch((error) => {
        resultElem.innerHTML = generateErrorHTMLOutput(error);
    })
}

let generateSuccessHTMLOutput = (response) => {
    return `
        <h3>Result</h3>
        <p>Status:</p>
        <pre>${response.status} ${response.statusText}</pre>
        <p>Headers:</p>
        <pre>${JSON.stringify(response.headers, null, '\t')}</pre>
        <p>Data:</p>
        <pre>${JSON.stringify(response.data, null, '\t')}</pre>
    `
}

let generateErrorHTMLOutput = (error) => {
    return `
        <h3>Result</h3>
        <p>Message:</p>
        <pre>${error.message}</pre>
        <p>Status:</p>
        <pre>${error.response.status} ${error.response.statusText}</pre>
        <p>Headers:</p>
        <pre>${JSON.stringify(error.response.headers, null, '\t')}
        <p>Data:</p>
        <pre>${JSON.stringify(error.response.data, null, '\t')}
    `  
}

document.querySelector('#todoInputForm').addEventListener('submit', performPostRequest);