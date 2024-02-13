function UserInfo({ email }) {
  return (
    <div className="flex items-center space-x-4">
      <div className="flex-shrink-0">
        <div className="h-12 w-12 rounded-full bg-gray-300"></div>
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900 truncate">{email}</p>
      </div>
    </div>
  );
}

export default UserInfo;
