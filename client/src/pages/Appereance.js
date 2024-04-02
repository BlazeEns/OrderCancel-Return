import React from 'react';
import Layout from '../components/layout';
import './Appereance.css';
import { useState } from 'react';

function Appereance() {

  const [dataForApi, setDataForApi] = useState({
    starcolor: '#000000',
    primarycolor: '',
    buttoncolor: '',
    secondarycolor: '',
    buttonTextcolor: '',
    input: 'Post',
    fontsize: '',
    buttonBorder: '',
    emptystar: '#FFFFFF'
  })


  const handleonchange = (e) => {
    setDataForApi({
      ...dataForApi,
      [e.target.name]: e.target.value
    })

  }


  const handleDataChange = () => {
    console.log("data for api =====>>>>>>>>>>>>>", dataForApi)
  }

  return (
    <Layout>
      <div style={{ background: "#f6f6f7" }} className=' container'>



        <p className='d-flex justify-content-center fw-bold fs-4'>Ratings and Review </p>


        <div className='d-flex justify-content-around resp_container'>

          <div className=' mb-5 shadow p-3 bg-white rounded control_container'>
            <div style={{ background: "white" }} >
              <p className=' fw-semibold' id='color_head' style={{ fontSize: "11px" }}>COLORS</p>
              <div className='d-flex justify-content-around controler'>
                <div className='d-flex color_picker'>
                  <div
                    style={{
                      width: '30px',
                      height: '28px',
                      overflow: 'hidden',
                      borderRadius: '50%',
                      position: 'relative',
                    }}

                  >
                    <input
                      type="color"
                      value={dataForApi.primarycolor}
                      name='primarycolor'
                      style={{
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                        border: "0"
                      }}
                      onChange={(e) => { handleonchange(e) }}
                    />
                  </div>

                  <span className='ms-1'>primary</span>
                </div>

                <div className='d-flex color_picker'>
                  <div
                    style={{
                      width: '30px',
                      height: '28px',
                      overflow: 'hidden',
                      borderRadius: '50%',
                      position: 'relative',
                    }}
                  >
                    <input
                      type="color"
                      value={dataForApi.secondarycolor}
                      name='secondarycolor'
                      style={{
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                        border: "0"
                      }}
                      onChange={(e) => { handleonchange(e) }}
                    />
                  </div>
                  <span className='ms-1'>Secondary</span>
                </div>
              </div>
              <hr />
              <div className=' ' id='btn_container'>
                <p className=' mt-2 fw-semibold' id='btn_head' style={{ fontSize: "11px" }}>BUTTON</p>
                <div className='d-flex  button_color'>
                  <select name="buttoncolor" value={dataForApi.buttoncolor} style={{ width: "48%" }} className='form-select color_picker' onChange={(e) => { handleonchange(e) }}>
                    <option selected >Background</option>
                    <option value={`${dataForApi.primarycolor}`}>primary</option>
                    <option value={`${dataForApi.secondarycolor}`}>secondary</option>
                  </select>

                  <div className='text_color'>
                    <div className='d-flex color_picker'>
                      <div
                        style={{
                          width: '30px',
                          height: '28px',
                          overflow: 'hidden',
                          borderRadius: '50%',
                          position: 'relative',
                        }}

                      >
                        <input
                          type="color"
                          value={dataForApi.buttonTextcolor}
                          name='buttonTextcolor'
                          style={{
                            width: '100%',
                            height: '100%',
                            position: 'absolute',
                            border: "0"
                          }}
                          onChange={(e) => { handleonchange(e) }}
                        />
                      </div>
                      <span className='ms-1' >Text color</span>
                    </div>
                  </div>
                </div>
              </div>


              <div className='d-flex input_container '>
                <div className='  mb-2 ' id='font_container'>
                  <label className='mt-2 mb-1 fw-semibold font_size'>Font Size</label><br />
                  <div >
                    <input type="text"
                      className='input_field form-gruop form-control'
                      value={dataForApi.fontsize}
                      name='fontsize'
                      style={{ border: "1px solid #dee2e6" }}
                      onChange={(e) => { handleonchange(e) }}
                    />
                  </div>
                </div>
                <div className=' ' id='btn_text'>
                  <label className='mt-2 mb-1 fw-semibold font_size'>Button text</label><br />

                  <input type="text"
                    name='input'
                    value={dataForApi.input}
                    className='me-1 input_field form-gruop form-control'
                    style={{ border: "1px solid #dee2e6" }}
                    onChange={(e) => { handleonchange(e) }}
                  />

                </div>
              </div>

              <div className='ms-1' id='btn_border'>

                <p className=' fw-semibold star_head' style={{ fontSize: "12px" }}>Border</p>
                <select name="buttonBorder" value={dataForApi.buttonBorder} className="form-select mb-4 d-inline-block" id='border_select' onChange={(e) => { handleonchange(e) }}>
                  <option selected    >Solid</option>
                  <option >Dotted</option>
                  <option >Dashed</option>
                  <option >None</option>
                </select>
              </div>

              <hr />

              <div className='star_container'>

                <p className=' mt-2 fw-semibold star_head' style={{ fontSize: "11px" }}>STAR COLOR</p>
                <select name="starcolor" value={dataForApi.starcolor} className="form-select mb-4 d-inline-block" id='star_select' onChange={(e) => { handleonchange(e) }}>
                  <option value="#FFD700"  >Gold</option>
                  <option value="#000000" selected>Black</option>
                  <option value={`${dataForApi.primarycolor}`}>primary</option>
                  <option value={`${dataForApi.secondarycolor}`}>secondary</option>
                </select>
              </div>

              <div className='star_container'>

                <p className='mt-2 fw-semibold star_head' style={{ fontSize: "11px" }}>EMPTY STAR COLOR</p>
                <select name="emptystar" value={dataForApi.emptystar} className="form-select mb-4 d-inline-block" id='select_div' onChange={(e) => { handleonchange(e) }} >
                  <option value="#FFD700"  >Gold</option>
                  <option value="#000000">Black</option>
                  <option value="#FFFFFF" selected>White</option>
                  <option value={`${dataForApi.primarycolor}`}>primary</option>
                  <option value={`${dataForApi.secondarycolor}`}>secondary</option>
                </select>
              </div>
            </div>

            <div className='justify-content-center d-flex'>
              <button className='btn btn-primary' onClick={handleDataChange}>Save Changes</button>
            </div>


          </div>

          <div className='shadow p-3 bg-white rounded m-5' style={{ border: "2px dashed #D3D3D3", height: "max-content", width: "-webkit-fill-available" }}>

            <div className='d-flex flex-column justify-content-center align-items-center '>
              <p className='fw-bold fs-3 mt-4 mb-1' style={{ color: `${dataForApi.buttonTextcolor}` }}>5.0</p>

              <div className='mb-2'>

                <span >
                  <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ fill: `${dataForApi.starcolor}` }} >
                    <path d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z" stroke="#1C274C" stroke-width="1.5" />
                  </svg>
                </span>

                <span >
                  <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ fill: `${dataForApi.starcolor}` }} >
                    <path d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z" stroke="#1C274C" stroke-width="1.5" />
                  </svg>
                </span>

                <span>
                  <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ fill: `${dataForApi.starcolor}` }} >
                    <path d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z" stroke="#1C274C" stroke-width="1.5" />
                  </svg>
                </span>

                <span >
                  <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ fill: `${dataForApi.starcolor}` }}>
                    <path d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z" stroke="#1C274C" stroke-width="1.5" />
                  </svg>
                </span>

                <span >
                  <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ fill: `${dataForApi.emptystar}` }}>
                    <path d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z" stroke="#1C274C" stroke-width="1.5" />
                  </svg>
                </span>

              </div>

              <p className=' fw-semibold' style={{ color: `${dataForApi.buttonTextcolor}` }}>Based on 76 reviews</p>

              <button className='fw-semibold mb-5'
                style={{
                  borderStyle: dataForApi.buttonBorder,
                  fontSize: `${dataForApi.fontsize}px`,
                  backgroundColor: `${dataForApi.buttoncolor}`,
                  color: `${dataForApi.buttonTextcolor}`
                }}
              >
                {dataForApi.input}
              </button>
            </div>
          </div>


        </div>


      </div>
    </Layout>
  )
}

export default Appereance;