export default function ProgressTracker({
  step
}) {

  const steps = [

    "Shopping Cart",

    "Delivery Details",

    "Promotions & Review",

    "Payment"

  ];

  return (

    <div className="flex items-center gap-10">

      {steps.map((item, index) => (

        <div
          key={index}
          className="flex items-center gap-3"
        >

          <div

            className={`

              w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold

              ${
                step === index + 1
                  ? "bg-green-500 text-white"
                  : "bg-gray-300 text-gray-700"
              }

            `}
          >

            {index + 1}

          </div>

          <p className="font-medium">

            {item}

          </p>

        </div>

      ))}

    </div>

  );

}