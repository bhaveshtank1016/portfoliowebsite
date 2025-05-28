import React, { useState } from "react";

function Homesection() {
  const [actionBtn, SetActionBtn] = useState({
    title: "View My Projects",
    link: "/projects",
  });
  const [actionBttn, SetActionBttn] = useState({
    title: "Contect Me",
    link: "/contect",
  });
  return (
    <div className="bg-neutral-900 text-white pt-64 pb-20 min-h-[70vh] ">
      <div className=" container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-10 mg:flex-row items-center justify-between">
            <h1 className="text-5xl md:text-5xl  lg:text-6xl font-bold mb-4">
              Hi,I'm{" "}
              <span className=" bg-gradient-to-r from-[#3A86FF] to-[#FF006E]  bg-clip-text text-transparent">
                Bhavesh Tank
              </span>
            </h1>
            <h2 className=" text-xl md:text-2xl mb-4">
              Full-Stack Mobile & Web Developer
            </h2>
            <h2 className=" text-blue-600 text-xl md:text-2xl mb-4">
              {" "}
              UI/UX designer Flutter Developer React Native Expert{" "}
            </h2>
            <p className="text-gray-300 mb-8 max-w-lg">
              Crafting high-performance, visually stunning applications with
              cutting-edge technologies and sleek UI/UX design.
            </p>
            <div>
              <a
                href={actionBtn.link}
                className="text-white  text-xl p-2 bg-[#2A76EF] mr-6 rounded-xl px-6 py-4 hover:bg-pink-600"
              >
                View My Projects
              </a>
              <a
                href={actionBttn.link}
                className="text-xl px-6 py-4 rounded-xl ml-2 bg-transparent border-2 border-[#FF006E] hover:bg-pink-600 "
              >
                Contect Me
              </a>
            </div>
          </div>
          <div>
            <img
              className="h-90 w-auto mr-15 "
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPEA8PDw8NDw0NDw8NDQ0NDQ8ODQ0NFREWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFxAQFy0dHh0tLS0tLS0tLS0rLS0tLS0rLSsvLS0rLSstKystLS0rLy0rKy0tLS0tLTYtLSstLS0tN//AABEIAKIBNwMBIgACEQEDEQH/xAAcAAADAQEBAQEBAAAAAAAAAAAAAQIDBAUGBwj/xABCEAACAQMBBQUFBgIGCwAAAAAAAQIDBBEhBRIxQVEGEyJhcQcygZGhFCNCUmLBscIzotHh8PEIFSQ0U2ODkpOys//EABoBAAMBAQEBAAAAAAAAAAAAAAECAwAEBQb/xAApEQEBAQACAQMDAwQDAAAAAAAAAQIDETEEEiEFE0FRYZEicYGxFDJS/9oADAMBAAIRAxEAPwD8TAGB0FAABmAABmAwGhpDAYYGUkE0VFCRSHkNAMaRSRWZN0lIrBWClEpMj0hIe6aqmWqaKTjtGRhuhunQoLoG75L5D/aH2ubdFunU4LoJ00C8Vb2uVolo6HS+Jm4k7ilsY4JaNWiWidyDMGW0TglYWxJJeBYJ2AkTKETsKkBiYgEAxGYAAMDAYhmYAAGAAAGYAABFSQ0JDRSQ0MaEUkVkNDRaQki4ormCaRSQ0jaEOpfOezyIjTNVHBWBpHTjjPISQ8FJDwXnGbpGAwabobpT7Y9M8CaNcCaBeJumTRLRruktE9cZenPKmZSidiWWl1eBXVDdlOHOE5QfLLi2jl3xkscTRDRtKJEkc+sk6ZMTLJaI6yHSRMYmSsIkBiJWAQAIUAAAZgMAMwAAAAAACwGA0NBNDwCGikhoEWiUWi2YeKRpFERRvSidGMmkXTjzNECRSR2YwrIEikhxQ5zUVl/DqzpmZmd03id01EidaMeL+C1ZxXF235L8q4/E43VfocPN9Rzn4xO0dc//AJepK+XKL+LwR/rD9K/7v7jzMiOK/UOa/lP7u/1esr6POLXo0zWnWhLhJZ6PR/U8Ue8V4/qfJP8At1Rzz6nn5e44kOJwW99KOj8UfPij2rCrbSw6quJR59xOnGX9aL1PT4vU8fNn+nz+n5XzyTU+GvZ3Zk7q7tremm5Va1NP9MFJOcn5KKb+Bt232ZO12je0pxcf9oqVaeVhSo1JOcJLqsPHqmfrXslrbHzONnGtC+cH3n21wlcTp513JR8O7wyo4fDKO72r1NkKlBbSjOVxiX2ZWuFepc2m9FHP5tMnmcvqr/yPb7b+n7/3Su77vD+eZx/vMJRPbvZWWfuIX+P+fVt2/wCrA8mrFZ04ci2p3O+jVzSRLRpJEM59QlZtCKaJOfULSYhsRLULSEMTEpSAAAwGAGYAAGAAAGE0NCRQ+RMpElIrk0UkUhIqJfMPGkUdNNYRhTXA6Ujq4p+T5NItISRaR38eVZBJ7qy+CPMua7b8+nJI6L6ty5R+sjzW8nl+v9T7tezPiObl33ep4JgAHlogAAzAGAGYja2uHTeeKfvLqjEBsb1jU1m9WDL0+q2NtKVtWoXVJtSo1IVYtPGUn4ovyayn6s7u3e03d7RvKzba76dKnlvw0qb3IpdFhZ9W+p8tsytxpvg8uPk+aPSuJ705y/POUvTLbPouK555Obr566rsxffPc5mRNZRq0Q0LyQdOWRnI3qR4mUkcOojWbM2atGbObZaliRWBEqSpYmMGSoEIYgABiQwMAAAgBiGYTKRKKRSGhotL6EI6Kf8ARz9YfzFsmXK0qR1lTqRW7GfihJeCXuy4cHyfMiKPW2lWnCXdq4hVjUo0FOcIQimo+6m1xaxx4tNZ6HlwL4NGtFfwO6jBc03o28J9OJx0OZ6NnrveNRzFxeUtVhv+KR1cZ4inTbTSjJy8ot+fL0/iddFU4xqSqUqkmt2VPCkkknmSbTWNHHXXR8tGFBbrX3scTlmWYxkvecc6vpJvUrbFNKlKSuIVG3HwxUdc7ifB9Evlyeh0a11mjbXy1zLVL4v1MS6r8T9SD57d7trlANn03YXsVcbYrTp0JU6dOioyuK9R5VKMm1HEVrKT3ZYXDTVo/Y6dlsPsrTVSq3Wv5Re7KSjVvavlCPClDlnTzbZO66Z/Ox7/AGH7MT2re07SE+7i4zq1qu7vd1RjxljKy23GK85I87bd8rm5uLiNONGNxWqVo0Ye7SUpNqKP2j/R72OqNtebSq+FVZdxTlLCSoUlvVJ56OTx/wBM2r8M/KO3PZt7Kvatm6saypxhOFRR3G4TjlKUdcS+PR8z59Ht7d259r2hWv5wVSNW67/up+7KjGa3KT8tyMYn7dSrbC7VUlCUe4v4Q8MfDRvaKX5XwqwXTVLoge7pn87AfX+0DsBcbGlB1KlOvbV5SjQrw8Mm0suM4P3X6Nrz5HyA0vbKhLdakuMWmfRqKcFLEuKblh43Wup82uZ9FYPNCCc0k8tp4zosHq/TeSy6z/lXh113CrxS4Jp88prHzOeR2VYKTy6kcy3s4wlo8dTmqU8NLOVxydu6tazrRjhaPezlvX3ef7GTpZUmoyajjLSbUcvGvTOnE1ryx8UTRrOOVGeO8xv6Lk8r6nLvzU9OatFYTSkk+DaeHjjj6HPJHZUm+7Ud5NKWkdM6rOevN/M5avL0/dnLyEZCKJZChSENiJUpCwMWQABiGBgAAEAMQzCoaEMpBho3h7k/WH8xgjWMtGurT+Wf7S2T9PUupfaqilQt4UYqnGDpwdOMd5PWecR/NFZeuFlt6s4p03GUoyWJQk4yWjxJPDRNvXnBqUJSjJapxbTTyn+y+QnNttttttttvLbfFstn48DHRQfE9CC0S3V14rl/kebQ5+h1056PLedMa/M6+OqPTd1CTyqEEum9DD1XHw/4yc20E+6k9xRjJ4T8Lek4Z1Xo18WYwaXBy4S545afU6JRhKFSLnP3HuRctN/VrTHNqOnm3yOizvNk/QbL0+YqcX6sk0rLXPXUzPndTq1yPvfZL24pbHr1/tFOpOheKjGdSlhzoODniW7+JeN5xrppngfo3af2fbP29GW0dmXVONzV1nUjJ1LetNJaVYe9Tlw4fFM/nw9HYm27qxqd9aV6tvUaxJ05aTXSUXpJeqZO5/MFltLZ1W2r1bWpH7+hUlRnCL3s1E8Yjjjnl6n7720a2J2ahZwajWqUadinHTeq1cyryWPLvX8T8V7K7RpR2na3e0JzlSjdK5uajUqk5TTc1Npavx4bx5n1Xtp7ZUdpXFvStKne2trCUnUSlGNS4m1nCaWVGMYrP6may2yM/PLa3lVnTpQWalWcKVOOUszlJRis8tWj927L+zGx2RCN/te4pSq0XGpFSm6dpb1FwS51Z54f+p+DRm4tSi3GUWpRlFtSjJPKaa4M79t7fu76UZ3lxWuJQW7DvJeGC/TFaLzeNQ2Wg+19rvtAobWdGha05/Z7WcqiuKnhlWk47uIw4xj5vV54Ln+bjEGTpjR9Jsb7uEJzpRrQcJJQlKKWd5a65a6cObxwPnEvm3g+noOKhGLnJbuiSeiXh5Y9X8D1Pp2Lbq/t1/K3DO+2yvKcZSm7aEot53ZOGOC00jpwb06nDcVE5zkoKMZZ3YrdxH5LC+GBVmsLDb01MpS8zu1OlbHfd/7rSf2eK++a+05hmek/Bj3lz8vBprk4YXUFTce4g5aYqPdytOmOuvHy4aEV7ibiqe/Lu4veVNye4ptYbx1wckpHHvyWxdalJQjJwSjLSMsrxfvxjL6nPU5en7s0nVk0ouUnGPCLb3V6Iym+HksHNtJmJjEyNZIhiZPRSEMQoAYABgAAEANCGjCZSJGUgmi0Qi0Uh4pFozTLTL5po3pPDR0o5InVTeUdXFVMtEXFkRWWlp8Wkvmz1dmbDqV5KEatjTcnhOttC1gs9Mb7l9DrzyTM7qnfTl2RsiVepdKEW+7sL25wll4hSeiXXeaPmD+pfZ52HhsynUnUnCvc3EVGpOK+6hS493DPFPi2+Ommh+X+0L2UOznO4tbmzhaVJSlGjeXMLadKTf8ARwnPEZx6ZafBa8T5/wBTyY1zauPDj313en5UB03VjOn70qDx/wAK7tq3/wA5s5iZAAAZgAAZgCAqnBtpJZb4Bk7vUZ07Ppb08/hhr8eR6c2TQpKEVFerfVhJn0vpeH7HF7b5vzXdx49mUyIKZnNk+StayqPVmUi5Gcji1UqhkyKZMmcuiVAmMRKlITGxMlSkAAAAAAAAAAFgMQzCEUSUNBMpEjRWU0WioshMrJXNM1izelPHozmiaxZ0Y0eV2DRjSny+RqdmdRSXt+meyntpO1Vxa15OdtStq91QUpZdOVKO/KnH9Lim8cnHzZ8B2gv61/Wnc3E3OtNtrLbjCPKnFfhiuGEZ2Vx3bk/zUa9L/wAlKUP5jJM3H6fj9+tWeWmM23t5Fag0+GH9H6GDR70oqSw0mjmq2Gfdfwlr9Tk5/p2vPH8o64bPDysCOydjNfhz6NEOzn+SRwa9Py585v8ACXt1Pw5gOqNhUf4cerSOils1LWcs+UdF8ymPR8278Z/kZx6v4cFKk5PEVl/RHrW1sqa6yfGX7I2jFRWIpJeRMmet6b0eOH+q/Ov9Onj4pn5vkNkNg2Szo3tS0ZMKkiqkuXzMmzi5NJaqZMhjkyMnLqkoZnIpslkNUlITGxMlS0hMAJ0CYAAAAABgAABmAABmMaEAYMUhiGikMaKRI8jymjSJpFmKLTLZpm0WdEJ9TkTLTOjG+jSuzI0znhV66myeTpxyKSrTK3jNDyXzydG7abw94yyG8U+6PbXeIciciyC8re43IlsTZMnglrkLabZnOZM6hk2c2+Ql0cmQ2JslshdEtNkMbZDIa0UmwYCbI0tJiGJiWlIQxEwAABmAAAAAABmAABmAxAEVIogaGlFQ0SCZSUWiKTM0UmPNGlapjTM8jTKzRu2qZakYplZKTQ9uiNZ+paqr0OXeHvFJy0Zp1by6oefNfNHLkMj/AHh9zpc11RLqLzMHIneBeVvc2dX4GTkS5ENia32W1TkS2LImSug7NsTYsktk7oOzbJbBsRO0OxkTBiEtKZIxE7SgQABgAABgwADAAAAsAAAMAADCYAA0E0NAA8E0UgAeCoYgHz5GKQwAeCoAApBMAAIkwAAMTJAAUCZIAToExMAJ0qQABaAEwAnQIQALQAAAGAABgAABmf/Z"
              alt="bfbfb"
            />
          </div>
        </div>

        <div className=" mt-16 overflow-hidden">
          <div className="py-6 relative">
            <div className="absolute left-0 top-0 buttom-0 w-20 bg-gradient-to-r from-netural-900 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 buttom-0 w-20 bg-gradient-to-r from-netural-900 to-transparent z-10"></div>
            <div className="flex justify-center space-x-8 ticker-animation ">
              <div className="flex space-x-8 ">
                <div className="flex items-center bg-netural-900 border px-6 py-4 rounded-lg">
                  {" "}
                  <span className="text-[#3A86FF] mr-2">Flutter</span>{" "}
                </div>
                <div className="flex items-center bg-netural-900 border px-6 py-4 rounded-lg">
                  {" "}
                  <span className="text-[#FF006E] mr-2">React Native</span>{" "}
                </div>
                <div className="flex items-center bg-netural-900 border px-6 py-4 rounded-lg">
                  {" "}
                  <span className="text-[#3A86FF] mr-2">Flutter</span>{" "}
                </div>
                <div className="flex items-center bg-netural-900 border px-6 py-4 rounded-lg">
                  {" "}
                  <span className="text-[#FF006E] mr-2">Java</span>{" "}
                </div>
                <div className="flex items-center bg-netural-900 border px-6 py-4 rounded-lg">
                  {" "}
                  <span className="text-[#3A86FF] mr-2">Kotlin</span>{" "}
                </div>
                <div className="flex items-center bg-netural-900 border px-6 py-4 rounded-lg">
                  {" "}
                  <span className="text-[#FF006E] mr-2">Laravel</span>{" "}
                </div>
                <div className="flex items-center bg-netural-900 border px-6 py-4 rounded-lg">
                  {" "}
                  <span className="text-[#3A86FF] mr-2">PHP</span>{" "}
                </div>
                <div className="flex items-center bg-netural-900 border px-6 py-4 rounded-lg">
                  {" "}
                  <span className="text-[#FF006E] mr-2">JavaScript</span>{" "}
                </div>
                <div className="flex items-center bg-netural-900 border px-6 py-4 rounded-lg">
                  {" "}
                  <span className="text-[#3A86FF] mr-2">HTML/CSS</span>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homesection;
