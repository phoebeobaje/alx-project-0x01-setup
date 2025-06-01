import {UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps>=({name, email, phone, username, id, address, website, company})=>{
return(
    <div className="max-w-sm mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
      </div>
      <p className="text-gray-600">Email: {email}</p>
      <p className="text-gray-600">Phone: {phone}</p>
      <div className="mt-4 text-sm text-gray-500">
        <p>Username: {username}</p>
        <p>User ID: {id}</p>
      </div>
    </div>
)
}
export default UserCard;