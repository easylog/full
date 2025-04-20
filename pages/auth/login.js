export default function Login() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">Login</h1>
      <form className="space-y-4 mt-4">
        <input type="email" placeholder="E-Mail" className="border p-2 w-full" />
        <input type="password" placeholder="Passwort" className="border p-2 w-full" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2">Login</button>
      </form>
    </main>
  );
}