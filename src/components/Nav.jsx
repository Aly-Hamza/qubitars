import React, { useState }from 'react';
import { FaBars } from 'react-icons/fa';
import '../styles/Nav.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Modal, Box } from '@mui/material';
import {IoIosArrowForward} from 'react-icons/io'
import JG20 from '../../src/images/JG20-1.jpg'
import MY275 from '../../src/images/my275-1.jpg'
import YY26 from '../../src/images/YY26-1.jpg'
import XWC05 from '../../src/images/XW-CO5-1.jpg'
import XWXL09 from '../../src/images/XWXL09-1.jpg'
 

const Nav = () => {
    const navigate=useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
        <div className="nav">
            <div className="nav-wrapper">
            <button className="all-categories-button" onClick={openModal}>
                <FaBars className="icon" />
                All Categories
            </button>
            <nav className="nav-list">
                <ul>
                    <li onClick={()=>navigate("/")}>Home</li>
                    <li onClick={()=>navigate("/about")}>About</li>
                    <li onClick={()=>navigate("/contact")}>Contact</li>
                    <li onClick={() => navigate("/products")}>Products</li>

                </ul>
            </nav>
            <Link to='/qoute'><button className="quote-button" Link='/qoute'>Request Quote</button></Link>
            
            </div>
        </div>
        <Modal
            open={isModalOpen}
            onClose={closeModal}
            aria-labelledby="all-categories-modal"
            aria-describedby="list-of-categories"
            >
            <Box className="modal-content">
                <ul>
                 <li onClick={() => {
                    closeModal();
                    navigate("/products")
                  }}>
                    <img src={JG20} height={30} width={40} style={{marginRight:'5px'}}/> JG20
                    <span className="arrow-icon"><IoIosArrowForward /></span>
                </li><hr/>
                <li onClick={() => {
                    closeModal();
                    navigate("/products")
                  }}>
                    <img src={MY275} height={30} width={40} style={{marginRight:'5px'}}/>MY275
                    <span className="arrow-icon"><IoIosArrowForward /></span>
                </li><hr/>
                <li onClick={() => {
                    closeModal();
                    navigate("/products")
                  }}>
                    <img src={YY26} height={30} width={40} style={{marginRight:'5px'}}/>XD26
                    <span className="arrow-icon"><IoIosArrowForward /></span>
                </li><hr/>
                <li onClick={() => {
                    closeModal();
                    navigate("/products")
                  }}>
                    <img src={XWC05} height={30} width={40} style={{marginRight:'5px'}}/>XD26-II
                    <span className="arrow-icon"><IoIosArrowForward /></span>
                </li><hr/>
                <li onClick={() => {
                    closeModal();
                    navigate("/products")
                  }}>
                    <img src={XWXL09} height={30} width={40} style={{marginRight:'5px'}}/>M20
                    <span className="arrow-icon"><IoIosArrowForward /></span>
                </li><hr/>
                </ul>
            </Box>
        </Modal>
     </>
    );
};

export default Nav;



