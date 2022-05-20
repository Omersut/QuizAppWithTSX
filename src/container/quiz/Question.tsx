import React from "react";
import rawJson from "../../mock/data.json";

export default class Question extends React.Component<any> { 
    constractor(props: any) {
        this.state = {
            questions: rawJson,
            activeIndex: 0,
        }
    }
    componentDidMount() {
        document.title = 'Question';
    }

render() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="bg-info p-3 mt-5 rounded">
            <div> please read </div>
            <ul className="mt-3">
              <li>instruction 1</li>
              <li>instruction 2</li>
              <li>instruction 3</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} }