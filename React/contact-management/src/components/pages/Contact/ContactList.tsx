import { Link, useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import {
  deleteContact,
  getContacts,
} from "../../../services/contact.service.ts";
import type { IContact } from "../../../types/contact.ts";
import type { FormEvent } from "react";
import {
  alertConfirm,
  alertError,
  alertSuccess,
} from "../../../utils/alert.ts";

const ContactList = () => {
  const [params, setParams] = useSearchParams();
  const page = params.get("page") || "1";
  const name = params.get("search_name") || "";
  const email = params.get("search_email") || "";
  const phone = params.get("search_phone") || "";

  const { data, refetch } = useQuery({
    queryKey: ["contacts", name, email, phone, page],
    queryFn: async () => await getContacts(name, email, phone, page),
  });
  const pages = [...Array(data?.paging?.total_page).keys()].map((i) => i + 1);
  const handleSearch = (e: FormEvent) => {
    e.preventDefault();

    const formData = e.target as HTMLFormElement;
    const params: Record<string, string> = {};
    const searchName = formData.search_name.value.trim();
    const searchEmail = formData.search_email.value.trim();
    const searchPhone = formData.search_phone.value.trim();

    if (searchName) params.search_name = searchName;
    if (searchEmail) params.search_email = searchEmail;
    if (searchPhone) params.search_phone = searchPhone;

    setParams(params);
  };

  const handleDelete = async (id: string) => {
    if (!(await alertConfirm("Are you sure you want to delete this contact?")))
      return;

    const result = await deleteContact(id);
    if (result.data === "OK") {
      await alertSuccess("Delete contact success");
      await refetch();
    } else {
      await alertError("Delete contact failed");
    }
  };

  return (
    <>
      <div className="flex items-center mb-6">
        <i className="fas fa-users text-blue-400 text-2xl mr-3" />
        <h1 className="text-2xl font-bold text-white">My Contacts</h1>
      </div>
      {/* Search form */}
      <div className="bg-gray-800 bg-opacity-80 rounded-xl shadow-custom border border-gray-700 p-6 mb-8 animate-fade-in">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <i className="fas fa-search text-blue-400 mr-3" />
            <h2 className="text-xl font-semibold text-white">
              Search Contacts
            </h2>
          </div>
          <button
            type="button"
            id="toggleSearchForm"
            className="text-gray-300 hover:text-white hover:bg-gray-700 p-2 rounded-full focus:outline-none transition-all duration-200"
          >
            <i className="fas fa-chevron-down text-lg" id="toggleSearchIcon" />
          </button>
        </div>
        <div id="searchFormContent" className="mt-4">
          <form onSubmit={handleSearch}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div>
                <label
                  htmlFor="search_name"
                  className="block text-gray-300 text-sm font-medium mb-2"
                >
                  Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fas fa-user text-gray-500" />
                  </div>
                  <input
                    type="text"
                    id="search_name"
                    name="search_name"
                    className="w-full pl-10 pr-3 py-3 bg-gray-700 bg-opacity-50 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    placeholder="Search by name"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="search_email"
                  className="block text-gray-300 text-sm font-medium mb-2"
                >
                  Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fas fa-envelope text-gray-500" />
                  </div>
                  <input
                    type="text"
                    id="search_email"
                    name="search_email"
                    className="w-full pl-10 pr-3 py-3 bg-gray-700 bg-opacity-50 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    placeholder="Search by email"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="search_phone"
                  className="block text-gray-300 text-sm font-medium mb-2"
                >
                  Phone
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fas fa-phone text-gray-500" />
                  </div>
                  <input
                    type="text"
                    id="search_phone"
                    name="search_phone"
                    className="w-full pl-10 pr-3 py-3 bg-gray-700 bg-opacity-50 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    placeholder="Search by phone"
                  />
                </div>
              </div>
            </div>
            <div className="mt-5 text-right">
              <button
                type="submit"
                className="px-5 py-3 bg-gradient text-white rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 font-medium shadow-lg transform hover:-translate-y-0.5"
              >
                <i className="fas fa-search mr-2" /> Search
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Contact cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Create New Contact Card */}
        <div className="bg-gray-800 bg-opacity-80 rounded-xl shadow-custom overflow-hidden border-2 border-dashed border-gray-700 card-hover animate-fade-in">
          <Link to={"/dashboard/contacts/create"} className="block p-6 h-full">
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="w-20 h-20 bg-gradient rounded-full flex items-center justify-center mb-5 shadow-lg transform transition-transform duration-300 hover:scale-110">
                <i className="fas fa-user-plus text-3xl text-white" />
              </div>
              <h2 className="text-xl font-semibold text-white mb-3">
                Create New Contact
              </h2>
              <p className="text-gray-300">Add a new contact to your list</p>
            </div>
          </Link>
        </div>

        {/* Contact Card 1 */}
        {data?.data?.map((contact: IContact) => (
          <div
            key={contact.id}
            className="bg-gray-800 bg-opacity-80 rounded-xl shadow-custom border border-gray-700 overflow-hidden card-hover animate-fade-in"
          >
            <div className="p-6">
              <Link
                to={`/dashboard/contacts/detail/${contact.id}`}
                className="block cursor-pointer hover:bg-gray-700 rounded-lg transition-all duration-200 p-3"
              >
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-3 shadow-md">
                    <i className="fas fa-user text-white" />
                  </div>
                  <h2 className="text-xl font-semibold text-white hover:text-blue-300 transition-colors duration-200">
                    {contact.first_name} {contact.last_name}
                  </h2>
                </div>
                <div className="space-y-3 text-gray-300 ml-2">
                  <p className="flex items-center">
                    <i className="fas fa-user-tag text-gray-500 w-6" />
                    <span className="font-medium w-24">First Name:</span>
                    <span>{contact.first_name}</span>
                  </p>
                  <p className="flex items-center">
                    <i className="fas fa-user-tag text-gray-500 w-6" />
                    <span className="font-medium w-24">Last Name:</span>
                    <span>{contact.last_name}</span>
                  </p>
                  <p className="flex items-center">
                    <i className="fas fa-envelope text-gray-500 w-6" />
                    <span className="font-medium w-24">Email:</span>
                    <span>{contact.email}</span>
                  </p>
                  <p className="flex items-center">
                    <i className="fas fa-phone text-gray-500 w-6" />
                    <span className="font-medium w-24">Phone:</span>
                    <span>{contact.phone}</span>
                  </p>
                </div>
              </Link>
              <div className="mt-4 flex justify-end space-x-3">
                <Link
                  to={`/dashboard/contacts/edit/${contact.id}`}
                  className="px-4 py-2 bg-gradient text-white rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 font-medium shadow-md flex items-center"
                >
                  <i className="fas fa-edit mr-2" /> Edit
                </Link>
                <button
                  onClick={() => handleDelete(String(contact.id))}
                  className="px-4 py-2 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 font-medium shadow-md flex items-center"
                >
                  <i className="fas fa-trash-alt mr-2" /> Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-10 flex justify-center">
        <nav className="flex items-center space-x-3 bg-gray-800 bg-opacity-80 rounded-xl shadow-custom border border-gray-700 p-3 animate-fade-in">
          {page !== "1" && (
            <a
              onClick={() => setParams({ page: String(Number(page) - 1) })}
              className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 flex items-center"
            >
              <i className="fas fa-chevron-left mr-2" /> Previous
            </a>
          )}
          {pages.map((item: number) =>
            item === Number(page) ? (
              <a
                onClick={() => setParams({ page: String(item) })}
                key={item}
                className="px-4 py-2 bg-gradient text-white rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 font-medium shadow-md"
              >
                {item}
              </a>
            ) : (
              <a
                onClick={() => setParams({ page: String(item) })}
                key={item}
                className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200"
              >
                {item}
              </a>
            ),
          )}

          {Number(page) !== data?.paging?.total_page ||
            (data?.paging?.total_page === 0 && (
              <a
                onClick={() => setParams({ page: String(Number(page) + 1) })}
                className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 flex items-center"
              >
                Next <i className="fas fa-chevron-right ml-2" />
              </a>
            ))}
        </nav>
      </div>
    </>
  );
};
export default ContactList;
