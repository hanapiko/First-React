// ReactDOM.render(<h1>My First React</h1>, document.getElementById("root"))
// ReactDOM.render(<p>Hello world!, my name is Hannah</p>, document.getElementById("root"))
function Maincontent(){
    return (
        <h1>I'm learning React</h1>
    )
}
ReactDOM.render(<Maincontent />, document.getElementById("root"))

const heading = document.createElement("h1");
heading.textContent = "My first React";
heading.className = "header";
document.getElementById("root").append(heading);