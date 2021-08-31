import React, { useEffect } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listAddresses } from '../actions/addressActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { ADDRESS_DETAILS_RESET } from '../constants/addressConstants';

export default function AddressListScreen(props) {
  const addressesList = useSelector((state) => state.addressesList);
  const { loading, error, addressList } = addressesList;

  console.log(addressList)
  const userDelete = useSelector((state) => state.userDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = userDelete;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listAddresses());
    dispatch({
      type: ADDRESS_DETAILS_RESET,
    });
  }, [dispatch, successDelete]);
  const deleteHandler = (user) => {
    
  };

  return (
    <div className="address">
      <h1 className="addressH1">Your Addresses</h1>
      <Link to="/" >Add Address</Link>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
        <table className="table">
            <tbody>
              {addressList.map((address) => (
                <tr key={address._id}>
                  <td>{address.name}</td>
                  <td>{address.phone}</td>
                  <td>{address.pincode}</td>
                  <td>{address.addressLine}</td>
                  <td>{address.landmark}</td>
                  <td>{address.city}</td>
                  <td>{address.state}</td>
                  <td>{address.addressType}</td>
                  <td>
                    <button
                      type="button"
                      className="small"
                      onClick={() =>
                        props.history.push(`/address/${address._id}/edit`)
                      }
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="small"
                      onClick={() => deleteHandler(address)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
      </>
      )}
    </div>
  );
}
