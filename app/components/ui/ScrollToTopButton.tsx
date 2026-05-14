"use client";
import ScrollToTop from "react-scroll-to-top";
import { FaArrowUp } from "react-icons/fa6";

export default function ScrollToTopButton() {
    return (
        <ScrollToTop
            smooth
            style={{
                borderRadius: "50%",
                backgroundColor: "#F7FBFE",
                color:"#317EFE",
                display: "flex",
                bottom: "77px",
                right: "50px",
                alignItems: "center",
                justifyContent: "center",
                width: "46px",
                height: "46px",
            }}
            component={
                <FaArrowUp
                    stroke="1"
                />
            }
        />
    );
}