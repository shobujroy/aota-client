import React, { useContext } from 'react'
import ProductCard from '../components/PublicSale/ProductCard/ProductCard';
import styles from '../styles/withdraw.module.css';
import Navbar from '../components/Shared/Navbar/Navbar';
import Footer from '../components/Shared/Footer/Footer';
import Image from 'next/image';
import { useState, useEffect } from "react";
import AOTA from "../contracts/AOTA.json";
import { MintContext } from '../context/MintContext';
import swal from 'sweetalert';
import { WithContext as ReactTags } from 'react-tag-input';


function Admin() {
  const { isConnected, hasMetamask, sign, reserve, withdraw, trxHash, addUsersToWhitelist, checkStatus, status, setSalesStatus } = useContext(MintContext);

  useEffect(() => {
    console.log("isConnected and hasMetamask from useEffect of product card");
    console.log(isConnected);
    console.log(hasMetamask);
  }, [hasMetamask, isConnected, sign]);

  useEffect(() => {
    checkStatus();
  }, []);

  // fot tag input
  const [address, setAddress] = useState([{ id: '0', text: '0x0' }]);

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
                sign === '0xC506dB1beb6555B1b887AD2aC518d9676Fa95e6b'
                  ? (
                    <div className={styles.card}>
                      <h1 className="text-center fs-3">Admin Pannel</h1>
                      <p className="text-center"><a href='https://testnets.opensea.io/collection/aliens-on-the-ave-v3'>View Collection on OpenSea</a></p>
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
                            status == 0 ? "Sale Closed!" : (status == 1 ? "Privet Sale" : "Public Sale")
                          }
                        </h1>
                        {
                          status != 0 && <button className={`${styles.mintBtn}`} onClick={() => setSalesStatus(0)}>Set CLosed</button>
                        }
                        <br />
                        {
                          status != 1 && <button className={`${styles.mintBtn}`} onClick={() => setSalesStatus(1)}>Set Privet</button>
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