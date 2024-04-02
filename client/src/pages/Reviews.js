import React from 'react';
import Layout from '../components/layout';
import './reviews.css';
import { HiOutlineStar } from "react-icons/hi2";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { useState } from 'react';
import image from '../icons/facewash.webp';
import { MdPersonOutline } from "react-icons/md";



const reviewsData = [

];

function Reviews() {


  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState({});
  const [selectAllChecked, setSelectAllChecked] = useState(false);


  const editReview = () => {
    console.log("edit review")
  }

  const deleteReview = () => {
    console.log("delete review")
  }

  const pageSize = 3; // Number of items per page


  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedData = reviewsData.slice(startIndex, endIndex);

  const totalPages = Math.ceil(reviewsData.length / pageSize);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };





  return (
    <Layout>
      <div className='container mt-2'>
        <div className='row mb-2 review_nav'>
          <div className='col-lg-4 d-flex gap-4'>
            <div>
              <select name="Rate" className='form-select drop_select'>
                <option value="" selected >Rate</option>
                <option value="">1 star</option>
                <option value="">2 star</option>
                <option value="">3 star</option>
                <option value="">4 star</option>
                <option value="">5 star</option>
              </select>
            </div>
            <div>
              <select name="Status" className='form-select drop_select' >
                <option value="" selected >Status</option>
                <option value="">All</option>
                <option value="">Approved</option>
                <option value="">Dissaproved</option>
              </select>
            </div>
          </div>
          <div className='col-lg-8 d-flex justify-content-between gap-4'>
            <div className='d-flex w-75'>
              <input type='text' className='form-control' placeholder='search' />
              <button className='btn btn-light border drop_select ms-1'>search</button>
            </div>
            <div className='d-flex'>
              <button className='form-control drop_select btn btn-primary'>
                Import
              </button>
              <button className='form-control drop_select btn-primary btn ms-2'>
                Export
              </button>
            </div>
          </div>
        </div>




        <table className='border p-2 mb-3'>
          <tr >
            <th className=' d-flex product'>

              <div class="form-check">
                <input class="form-check-input" type="checkbox" />
              </div>
              product


            </th>

            <th className='rating'>
              <div className=''>Rating</div>
            </th>

            <th className='content'>
              <div className=''>Content</div>
            </th>

            <th className='status'>
              <div className=''>Status</div>
            </th>

            <th className='actions'>
              <div className=''>Action</div>
            </th>
          </tr>

          <hr style={{ width: "400%" }} />
          <tr >
            <td className='d-flex' style={{ position: "relative" }}>

              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              </div>
              <img src={image} className='prod_image' />
              <div className='user_name'>
                <MdPersonOutline style={{ width: "15px", height: 'fit-content' }} />
                By coustmer : suraj
              </div>
              LAKMÉ ABSOLUTE BLUR PERFECT PRIMER


            </td>
            <td className='rating'>

              <div>
                <HiOutlineStar className='color' />
                <HiOutlineStar className='color' />
                <HiOutlineStar className='color' />
                <HiOutlineStar className='color' />
                <HiOutlineStar className='color' />
              </div>

            </td>
            <td className='content'>
              <p >I liked the product, lipstick would have been better. </p>
            </td>
            <td className='status'>

              <select name="Status" className='drop_select form-select'>
                <option value="" selected>Approved</option>
                <option value=""  >Dissaproved</option>
              </select>

            </td>
            <td className='actions'>
              <FaRegEdit onClick={editReview} />
              <MdDeleteOutline onClick={deleteReview} />
            </td>
          </tr>






        </table>


        <div className="pagination justify-content-center">
          <button
            className='btn btn-primary me-3'
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span> Page {currentPage} of {totalPages} </span>
          <button
            className='btn btn-primary ms-3'
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>

      </div>
    </Layout>
  )
}

export default Reviews;