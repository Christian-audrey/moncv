import React from 'react';

const ProgressBar = (props) => {
    return (
        <div className={props.className}>
            <h3>{props.title} </h3>
            <div className='years'>
                <span>Années d'expérience</span>
                <span>1 ans</span>
                <span>2 ans</span>
            </div>

            <div>
                {
                    props.languages.map((item) =>{
                        let xpYears=2;
                        let ProgressBar= item.xp/xpYears * 100 + '%';

                        return(
                            <div key={item.id} className='languagesList'>
                                <li>{item.value}</li>
                                <div className='progressBar' 
                                style={{width:ProgressBar}}>

                                </div>
                            </div>
                        )
                    })
                }
            </div>
            
        </div>
    );
};

export default ProgressBar;
