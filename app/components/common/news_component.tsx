import { History } from "lucide-react";
import { format } from "timeago.js";

export default function NewsComponent({
  ...props
}: {
  date: string;
  title: string;
  body: string;
  image?: string[];
}) {
  return (
    <div className="relative pl-8 sm:pl-32 py-10 group">
      <div className="font-caveat font-medium text-2xl  mb-1 sm:mb-0">
        {props.title}
      </div>
      <br />
      <hr />
      <br />

      <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-black sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2    after:bg-black after:border-4   after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
        <time className="sm:absolute -left-8 translate-y-0.5 inline-flex items-center justify-center text-xs  font-semibold  whitespace-nowrap  w-28 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
          <History className="mr-1" size={15} />
          {format(props.date)}
        </time>
        <div className=" font-bold text-slate-500 text-sm">
          The image was captured by the Event Horizon Telescope, and is the
          first polarised image of a black hole
        </div>
      </div>

      {props.image ? (
        props.image.length > 0 ? (
          <div className="w-full">
            <p>{props.body}</p>
            <div className="flex w-full gap-4 mt-10">
              {props.image.map((item, index) => (
                <img
                  key={index}
                  className="w-[200px] h-[200px] border rounded bg-gray-200"
                  src={item}
                  alt="test"
                />
              ))}
            </div>
          </div>
        ) : (
          <p>{props.body}</p>
        )
      ) : (
        <p>{props.body}</p>
      )}
    </div>
    // <div className="w-[70%] flex m-auto relative py-20">
    //   <div className="absolute h-full w-px bg-black z-[-1] left-[19%] bottom-0 top-0"></div>
    //   <div className="flex-[1] flex items-baseline mt-6 gap-2 justify-center">
    //
    //   </div>
    //   <div className="p-4 flex-[3] flex flex-col gap-5">
    //     <h1 className="text-2xl">{props.title}</h1>
    //     <p className="text-sm">
    //       The image was captured by the Event Horizon Telescope, and is the
    //       first polarised image of a black hole
    //     </p>
    //     {props.image ? (
    //       props.image.length > 0 ? (
    //         <div className="w-full">
    //           <p>{props.body}</p>
    //           <div className="flex w-full gap-4 mt-10">
    //             {props.image.map((item) => (
    //               <img
    //                 className="w-[200px] h-[200px] border rounded bg-gray-200"
    //                 src={item}
    //                 alt="test"
    //               />
    //             ))}
    //           </div>
    //         </div>
    //       ) : (
    //         <p>{props.body}</p>
    //       )
    //     ) : (
    //       <p>{props.body}</p>
    //     )}
    //     <Interactions />
    //   </div>
    // </div>
  );
}
