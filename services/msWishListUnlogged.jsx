import axios from "axios";

const url = process.env.NEXT_PUBLIC_REACT_APP_MS_WISHLIST;

const wishListApiUnlogged = axios.create({
  baseURL: url,
  timeout: 100000,
});

export default wishListApiUnlogged;
