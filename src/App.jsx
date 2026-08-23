import { useState } from "react";
import Userlists from "./Components/Userlists";
import Usermodal from "./Components/Usermodal";


function App() {
  const [selectedUser, setSelectedUser] = useState(null);

  function handleUserSelect(user) {
    setSelectedUser(user);
  }

  function handleCloseModal() {
    setSelectedUser(null);
  }

  return (
    <main className="min-h-screen bg-gray-50">
      
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            User Directory
          </h1>

          <p className="mt-2 text-gray-500">
            Explore user profiles and view their information.
          </p>
        </div>
      </header>

      
      <section className="mx-auto max-w-7xl px-6 py-10">
        <Userlists onUserSelect={handleUserSelect} />
      </section>

      
      {selectedUser !== null && (
        <Usermodal
          user={selectedUser}
          onClose={handleCloseModal}
        />
      )}
      
    </main>
  );
}

export default App;
