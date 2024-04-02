import React from 'react';
import Layout from '../components/layout';
import { useState } from 'react';
import './settings.css';

function Settings() {

    const [theme, setTheme] = useState(false);
    const [autoApprove, setAutoApprove] = useState(false);
    const [productDisplay, setProductDisplay] = useState(false);


    const themeEnableDisable = () => {
        setTheme(!theme);

    };

    const handleAutoApprove = () => {
        setAutoApprove(!autoApprove);

    };

    const handleDisplyonProductPage = () => {
        setProductDisplay(!productDisplay);

    };


    console.log("themedisable/enable", theme)
    console.log("auto approve", autoApprove)
    console.log("product on dispaly", productDisplay)
    return (
        <Layout>
            <div className='shadow m-5 w-50 h-75 p-4' style={{background:"white"}}>

                <div className='container m-5 d-flex'>

                    <label className="switch">
                        <input type="checkbox" checked={theme} onChange={() => { themeEnableDisable() }} />
                        <span className="slider round"></span>
                    </label>

                    <div>
                        Theme Enable/Dissable
                    </div>
                </div>

                <div className='container m-5 d-flex'>

                    <label className="switch">
                        <input type="checkbox" checked={autoApprove} onChange={() => { handleAutoApprove() }} />
                        <span className="slider round"></span>
                    </label>

                    <div>
                        Auto approve
                    </div>
                </div>

                <div className='container m-5 d-flex'>

                    <label className="switch">
                        <input type="checkbox" checked={productDisplay} onChange={() => { handleDisplyonProductPage() }} />
                        <span className="slider round"></span>
                    </label>

                    <div>
                        Display on product page
                    </div>
                </div>



            </div>
        </Layout>
    )
}

export default Settings;


