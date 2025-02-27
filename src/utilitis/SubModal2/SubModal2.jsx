import { Chip, Divider, Modal } from "@mui/material";
import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { RxCross2 } from "react-icons/rx";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

export default function SubModal2({
  setSubModal,
  subModal,
  setVerify,
  setOpen,
}) {
  return (
    <div>
      <div className="relative">
        <Modal
          open={subModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 2xl:w-[654px] xl:w-[654px] lg:w-[654px]  md:w-[654px] w-[90%]    2xl:h-[488px] xl:h-[488px] lg:h-[488px] h-auto  bg-[#FFF] rounded-lg ">
            <div className=" cursor-pointer ">
              <RxCross2
                onClick={() => {
                  setSubModal(false);
                }}
                color="#D6D6D6"
                size="30px"
                className="cross_btn absolute right-5 top-2   mt-[16px] hover:rotate-180 duration-500"
              />
              <div className="signUp_container pt-[72px] 2xl:px-0 px-10">
                <div>
                  <h3 className=" text-[16px] font-semibold text-[#000] pb-[14px] 2xl:w-[372px] w-full mx-auto 2xl:text-start text-start">
                    Besoin d'aide pour récupérer votre compte ?
                  </h3>
                  <p className="text-[#666] font-medium text-[14px] pb-[47px] leading-5 2xl:w-[372px] w-full mx-auto text-start">
                    Entrez votre adresse e-mail pour recevoir un code de
                    vérification unique (OTP) et réinitialiser votre mot de
                    passe.
                  </p>

                  <div className=" 2xl:w-[372px] w-full 2xl:h-[46px] h-auto mx-auto">
                    <div>
                      <label
                        htmlFor=" e-mail"
                        className="text-[14px] text-[#000] font-semibold pb-[10px] block"
                      >
                        Adresse e-mail
                      </label>
                    </div>
                    <div className="input_filed pb-[17px]">
                      <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Entrez votre adresse e-mail"
                        className="2xl:w-[372px] w-full 2xl:h-[46px] h-[46px] pl-[25px] border rounded-full border-[#CFCFCF]  outline-none placeholder:text-[#CFCFCF]"
                      />
                    </div>

                    {/* button */}
                    <div
                      className=" pb-[15px] pt-[33px]"
                      onClick={() => {
                        setSubModal(false);
                        setVerify(true);
                      }}
                    >
                      <button className="common_btn  w-full 2xl:h-[46px] h-[46px] rounded-full text-[#fff] font-semibold text-[15px] ">
                        Se connecter
                      </button>
                    </div>
                    {/* button */}
                    {/* button */}
                    <div
                      className="2xl:pb-0 pb-5"
                      onClick={() => {
                        setSubModal(false);
                        setOpen(true);
                      }}
                    >
                      <button className="uncommon_btn2  w-full h-[46px] rounded-full text-[#fff] font-semibold text-[15px] flex justify-center items-center gap-2">
                      <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 6.75C21.4142 6.75 21.75 6.41421 21.75 6C21.75 5.58579 21.4142 5.25 21 5.25V6.75ZM0.469669 5.46967C0.176777 5.76256 0.176777 6.23744 0.469669 6.53033L5.24264 11.3033C5.53553 11.5962 6.01041 11.5962 6.3033 11.3033C6.59619 11.0104 6.59619 10.5355 6.3033 10.2426L2.06066 6L6.3033 1.75736C6.59619 1.46447 6.59619 0.989593 6.3033 0.696699C6.01041 0.403806 5.53553 0.403806 5.24264 0.696699L0.469669 5.46967ZM21 5.25L1 5.25V6.75L21 6.75V5.25Z" fill="black"/>
</svg> 
                        Retour à la page de connexion
                      </button>
                    </div>
                    {/* button */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}
