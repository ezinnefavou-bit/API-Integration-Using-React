import { useEffect } from "react";

function Usermodal({ user, onClose }) {
  useEffect(() => {
    function handleEscape(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleEscape);

    document.body.style.overflow = "hidden";

    return function () {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
    >
      <div
        onClick={function (event) {
          event.stopPropagation();
        }}
        className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white shadow-2xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-100 p-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              User Profile
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Full profile information
            </p>
          </div>

          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-xl text-gray-600 transition hover:bg-gray-200 hover:text-gray-900"
          >
            ×
          </button>
        </div>

        {/* Profile */}
        <div className="p-6">
          <div className="flex flex-col items-center text-center sm:flex-row sm:text-left">
            <img
              src={user.image}
              alt={`${user.firstName} ${user.lastName}`}
              className="h-28 w-28 rounded-full object-cover ring-4 ring-gray-100"
            />

            <div className="mt-4 sm:ml-6 sm:mt-0">
              <h3 className="text-2xl font-bold text-gray-900">
                {user.firstName} {user.lastName}
              </h3>

              <p className="mt-1 text-blue-600">
                {user.company.title}
              </p>

              <p className="mt-1 text-sm text-gray-500">
                @{user.username}
              </p>
            </div>
          </div>

          {/* Personal Information */}
          <div className="mt-8">
            <h4 className="mb-4 text-lg font-bold text-gray-900">
              Personal Information
            </h4>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-gray-50 p-4">
                <p className="text-xs font-medium uppercase text-gray-500">
                  Age
                </p>

                <p className="mt-1 font-semibold text-gray-900">
                  {user.age}
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-4">
                <p className="text-xs font-medium uppercase text-gray-500">
                  Gender
                </p>

                <p className="mt-1 font-semibold capitalize text-gray-900">
                  {user.gender}
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-4">
                <p className="text-xs font-medium uppercase text-gray-500">
                  Email
                </p>

                <p className="mt-1 break-all font-semibold text-gray-900">
                  {user.email}
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-4">
                <p className="text-xs font-medium uppercase text-gray-500">
                  Phone
                </p>

                <p className="mt-1 font-semibold text-gray-900">
                  {user.phone}
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-4">
                <p className="text-xs font-medium uppercase text-gray-500">
                  Birth Date
                </p>

                <p className="mt-1 font-semibold text-gray-900">
                  {user.birthDate}
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-4">
                <p className="text-xs font-medium uppercase text-gray-500">
                  Username
                </p>

                <p className="mt-1 font-semibold text-gray-900">
                  {user.username}
                </p>
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="mt-8">
            <h4 className="mb-4 text-lg font-bold text-gray-900">
              Address
            </h4>

            <div className="rounded-xl bg-gray-50 p-4">
              <p className="font-semibold text-gray-900">
                {user.address.address}
              </p>

              <p className="mt-1 text-sm text-gray-500">
                {user.address.city}, {user.address.state}
              </p>

              <p className="text-sm text-gray-500">
                {user.address.country}
              </p>
            </div>
          </div>

          {/* University */}
          <div className="mt-8">
            <h4 className="mb-4 text-lg font-bold text-gray-900">
              Education
            </h4>

            <div className="rounded-xl bg-gray-50 p-4">
              <p className="font-semibold text-gray-900">
                {user.university}
              </p>
            </div>
          </div>

          {/* Company */}
          <div className="mt-8">
            <h4 className="mb-4 text-lg font-bold text-gray-900">
              Company
            </h4>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-xl bg-gray-50 p-4">
                <p className="text-xs font-medium uppercase text-gray-500">
                  Company
                </p>

                <p className="mt-1 font-semibold text-gray-900">
                  {user.company.name}
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-4">
                <p className="text-xs font-medium uppercase text-gray-500">
                  Title
                </p>

                <p className="mt-1 font-semibold text-gray-900">
                  {user.company.title}
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-4">
                <p className="text-xs font-medium uppercase text-gray-500">
                  Department
                </p>

                <p className="mt-1 font-semibold text-gray-900">
                  {user.company.department}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Usermodal;