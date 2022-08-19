import React, { useContext } from 'react'
import ProductCard from '../components/PublicSale/ProductCard/ProductCard';
import styles from '../styles/withdraw.module.css';
import Navbar from '../components/Shared/Navbar/Navbar';
import Footer from '../components/Shared/Footer/Footer';
import Image from 'next/image';
import { useState, useEffect } from "react";
import AOTA from "../contracts/AOTA.json";
import { MintContext } from '../context/MintContext';
import { WithContext as ReactTags } from 'react-tag-input';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal);


function Admin() {
  const { isConnected, hasMetamask, sign, reserve, withdraw, trxHash, addUsersToWhitelist, checkStatus, status, setSalesStatus, web3 } = useContext(MintContext);

  useEffect(() => {
  }, [hasMetamask, isConnected, sign]);

  useEffect(() => {
    checkStatus();
  }, [web3]);

  // fot tag input
  const [address, setAddress] = useState([]);

  const handleDelete = i => {
    setAddress(address.filter((add, index) => index !== i));
  };

  const handleAddition = add => {
    setAddress([...address, add]);
  };

  const handleDrag = (add, currPos, newPos) => {
    const newAdd = address.slice();

    newAdd.splice(currPos, 1);
    newAdd.splice(newPos, 0, add);

    // re-render
    setAddress(newAdd);
  };

  const handleTagClick = index => {
    console.log('The tag at index ' + index + ' was clicked');
  };

  const handleAddToWhitelist = async () => {
    const addresses = address.map(add => add.text);

    await addUsersToWhitelist(addresses);

    setAddress([]);
  }


  return (
    <><div>
      <Navbar BorderBottom={true} wallet={true} />
      <div className={`bg-secondary ${styles.adminPage}`}>
        <div className={`container pt-3 pb-5`}>
          <div className="row">
            <div className='mt-3 d-flex justify-content-center'>
              {
                sign === '0x33588e7C50457e0e5f7dC0fD8FFa60E93ef33881'
                  ? (
                    <div className={styles.card}>
                      <h1 className="text-center fs-3">Admin Panel</h1>
                      <p className="text-center"><a href='https://opensea.io/collection/aota-genesis'>View Collection on OpenSea</a></p>
                      <div className="text-center">
                        <ReactTags
                          tags={address}
                          handleDelete={handleDelete}
                          handleAddition={handleAddition}
                          handleDrag={handleDrag}
                          handleTagClick={handleTagClick}
                          inputFieldPosition="bottom"
                          classNames={styles.addressInput}
                        />
                        <button className={`${styles.mintBtn}`} onClick={() => handleAddToWhitelist()}>Add Users To Whitelist</button>
                      </div>
                      <div className='text-center pt-5'>
                        <h1 className="text-center fs-3 pb-3">
                          {
                            status == 0 ? "Sale Closed!" : (status == 1 ? "Private Sale" : "Public Sale")
                          }
                        </h1>
                        {
                          status != 0 && <button className={`${styles.mintBtn}`} onClick={() => setSalesStatus(0)}>Set Closed</button>
                        }
                        <br />
                        {
                          status != 1 && <button className={`${styles.mintBtn}`} onClick={() => setSalesStatus(1)}>Set Private</button>
                        }
                        <br />
                        {
                          status != 2 && <button className={`${styles.mintBtn}`} onClick={() => setSalesStatus(2)}>Set Public</button>
                        }
                      </div>
                      <div className="text-center pt-5">
                        <button className={`${styles.mintBtn}`} onClick={() => reserve()}>Reserve Mint</button>
                      </div>
                      {/* <div className="mt-5">
                        <p className={styles.statusBar}>see transaction: https://rinkeby.etherscan.io/tx/{trxHash}</p>
                      </div> */}
                    </div>
                  )
                  : (
                    <p className="text-danger">You are not admin!!</p>
                  )
              }
            </div>
          </div>
        </div>
      </div>
      <Footer bg={'footer-bg-secondary'} />
    </div></>
  )
}

export default Admin