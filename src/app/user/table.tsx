const data = {
  "-OKCnJXjTlQwpgWpMCNb": {
    end_date: "15/09/2024",
    name: "Lakhan",
    reg_no: 1,
    start_date: "09/09/2024",
    token: 24,
  },
  "-OKCnRoCrwR-C2X7G4e8": {
    end_date: "15/02/2025",
    name: "Monika",
    reg_no: 2,
    start_date: "22/06/2024",
    token: 42,
  },
  "-OKCnVszl0NN2kA_00UZ": {
    end_date: "08/09/2024",
    name: "Benedicta",
    reg_no: 3,
    start_date: "28/06/2024",
    token: 36,
  },
  "-OKCnWwww_kKgXujEwA0": {
    end_date: "13/09/2024",
    name: "Chen",
    reg_no: 4,
    start_date: "09/09/2024",
    token: 27,
  },
  "-OKCnYyByNQvsmRRCqBu": {
    end_date: "29/04/2024",
    name: "Ladonna",
    reg_no: 5,
    start_date: "02/07/2024",
    token: 37,
  },
  "-OKCnh5w_ER3YjCFyOoU": {
    end_date: "10/11/2024",
    name: "Etty",
    reg_no: 6,
    start_date: "24/01/2025",
    token: 24,
  },
  "-OKCniV-bmVky8cowKN1": {
    end_date: "21/05/2024",
    name: "Horten",
    reg_no: 7,
    start_date: "17/06/2024",
    token: 35,
  },
  "-OKCnktR7bTw6B04RGNQ": {
    end_date: "26/04/2024",
    name: "ram",
    reg_no: 8,
    start_date: "17/04/2024",
    token: 15,
  },
  "-OKCnmZ3agBrvaeuijV6": {
    end_date: "02/01/2025",
    name: "Connie",
    reg_no: 9,
    start_date: "11/01/2025",
    token: 46,
  },
  "-OKCnocVQ2h8BtH3ldhx": {
    end_date: "12/09/2024",
    name: "Petr",
    reg_no: 10,
    start_date: "18/04/2024",
    token: 51,
  },
  "-OKCnrvV-u4u1XBt9VDB": {
    end_date: "30/01/2025",
    name: "Jamima",
    reg_no: 11,
    start_date: "09/08/2024",
    token: 37,
  },
};

const DataTable = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 px-4 py-10">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-lg bg-white shadow-xl">
        <div className="p-6">
          <h2 className="mb-6 text-center font-semibold text-3xl text-gray-800">
            Customer Information
          </h2>
          <div className="overflow-x-auto rounded-lg bg-white shadow-md">
            <table className="min-w-full table-auto border-collapse">
              <thead>
                <tr className="bg-gray-600 text-white">
                  <th className="px-6 py-3 text-left">Name</th>
                  <th className="px-6 py-3 text-left">Reg No</th>
                  <th className="px-6 py-3 text-left">Start Date</th>
                  <th className="px-6 py-3 text-left">End Date</th>
                  <th className="px-6 py-3 text-left">Token</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(data).map(([key, item], index) => (
                  <tr
                    key={key} // Use the unique key from the data object
                    className={`${
                      index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    } transition-all hover:bg-indigo-100`}
                  >
                    <td className="px-6 py-3 text-gray-700">{item.name}</td>
                    <td className="px-6 py-3 text-gray-700">{item.reg_no}</td>
                    <td className="px-6 py-3 text-gray-700">
                      {item.start_date}
                    </td>
                    <td className="px-6 py-3 text-gray-700">{item.end_date}</td>
                    <td className="px-6 py-3 text-gray-700">{item.token}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
