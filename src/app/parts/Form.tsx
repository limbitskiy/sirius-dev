"use client";

import { useRef } from "react";
// components
import { Button } from "../components/UI/Button";
import Input from "../components/UI/Input";
import Textarea from "../components/UI/Textarea";

export default function Form() {
  const handleBtn = (url: string) => {
    console.log(`bnttt`);
  };

  const nameRef = useRef();
  const emailRef = useRef();
  const commentRef = useRef();

  function handleSubmit(e: SubmitEvent) {
    e.preventDefault();

    // const name = nameRef.current!.value;
    // const email = emailRef.current!.value;
    // const comment = commentRef.current!.value;
    // console.log({ name, email, comment });
  }

  return (
    <section className="form mb-12">
      <div className="form-bg text-white">
        <div className="container py-16">
          <h2 className="section-title text-center">Есть вопросы?</h2>
          <h3 className="section-title text-center">Свяжитесь с нами</h3>
          {/* @ts-ignore */}
          <form className="w-full flex flex-col" onSubmit={handleSubmit}>
            <div className="form-content flex flex-wrap my-6 gap-4 justify-center">
              <div className="form-start w-4/5 sm:w-2/5 flex flex-col gap-4 min-w-60 h-32 justify-between">
                {/* @ts-ignore */}
                <Input ref={nameRef} placeholder="ИМЯ" />
                {/* @ts-ignore */}
                <Input ref={emailRef} placeholder="EMAIL" />
              </div>
              <div className="form-end w-4/5 sm:w-2/5 min-w-60">
                {/* @ts-ignore */}
                <Textarea ref={commentRef} placeholder="КОММЕНТАРИЙ" />
              </div>
            </div>
            <input
              type="submit"
              value="отправить"
              className="cursor-pointer rounded-xl py-4 px-16 text-lg font-bold uppercase text-white transition-all w-4/5 sm:w-64 m-auto black-btn"
            />
          </form>
        </div>
      </div>
    </section>
  );
}
