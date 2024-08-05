import React from "react";

const orders = [
  {
    customer: "Wade Warren",
    orderNo: "15479256",
    amount: "$124.00",
    status: "Delivered",
  },
  {
    customer: "Jane Cooper",
    orderNo: "48085798",
    amount: "$385.02",
    status: "Delivered",
  },
  {
    customer: "Guy Hawkins",
    orderNo: "73869215",
    amount: "$45.88",
    status: "Cancelled",
  },
  {
    customer: "Kristin Watson",
    orderNo: "20095732",
    amount: "$65.00",
    status: "Pending",
  },
  {
    customer: "Cody Fisher",
    orderNo: "95715620",
    amount: "$545.60",
    status: "Delivered",
  },
  {
    customer: "Savannah Nguyen",
    orderNo: "78514568",
    amount: "$128.20",
    status: "Delivered",
  },
];

const feedbacks = [
  {
    name: "Jenny Wilson",
    stars: 5,
    comment: "The food was excellent and so was the service...",
  },
  {
    name: "Dianne Russell",
    stars: 5,
    comment: "We enjoyed the Eggs Benedict served on homemade...",
  },
  // {
  //   name: "Devon Lane",
  //   stars: 5,
  //   comment: "Normally avians are wines, but theirs are lean...",
  // },
];

const OrderFeedback = () => {
  return (
    <div className="flex  p-2  gap-6">
      <div className="w-2/3 rounded-lg shadow-lg m-2">
        <h2 className="text-lg mb-4">Recent Orders</h2>
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="text-left">Customer</th>
              <th className="text-left">Order No.</th>
              <th className="text-left">Amount</th>
              <th className="text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index} className="border-b border-gray-800">
                <td className="py-2">{order.customer}</td>
                <td>{order.orderNo}</td>
                <td>{order.amount}</td>
                <td>
                  <span
                    className={`px-2 py-1 text-sm rounded ${
                      order.status === "Delivered"
                        ? "bg-green-600"
                        : order.status === "Pending"
                        ? "bg-yellow-500"
                        : "bg-red-600"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="w-1/4  h-100 overflow-auto rounded-lg shadow-lg">
        <h2 className="text-lg mb-4 p-4">Customer's Feedback</h2>
        {feedbacks.map((feedback, index) => (
          <div key={index} className="mb-4 p-4">
            <div className="flex items-center mb-1">
              <div className="w-8 h-8 bg-gray-500 rounded-full mr-2"></div>
              <h3 className="text-md">{feedback.name}</h3>
            </div>
            <div className="flex items-center mb-1">
              {"⭐".repeat(feedback.stars)}
            </div>
            <p className="text-sm text-gray-400">{feedback.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderFeedback;
