import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import CONSTANT from '../../Constant';

export default function Start() {
    useEffect(() => {
        document.title = 'Start';
        localStorage.removeItem(CONSTANT.key.answerSheet)
    }
    , []);
    return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                       <div className='bg-info p-3 mt-5 rounded'>
                           <div> please read </div>
                           <ul className='mt-3'>
                                 <li>instruction 1</li>
                                    <li>instruction 2</li>
                                    <li>instruction 3</li>

                           </ul>
                           </div>
                           <div className='mt-3'>
                           <Link to={CONSTANT.url.question} className='btn btn-primary btn-lg float-right'>Start</Link>
                           </div>
                    </div>
                </div>
            </div>
    );
}
      
