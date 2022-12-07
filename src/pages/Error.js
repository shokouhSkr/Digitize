import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="min-h-[calc(100vh-16rem)] pt-48">
      <h1 className="mb-6 text-center text-2xl text-slate-800">صفحه موردنظر پیدا نشد.</h1>

      <li className="list-none text-center text-xl text-red-400">
        <Link to="/">بازگشت به خانه ؟</Link>
      </li>
    </section>
  );
};

export default Error;
