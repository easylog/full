export default function Register() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">Registrieren</h1>
      <form className="space-y-4 mt-4">
        <input type="email" placeholder="E-Mail" className="border p-2 w-full" />
        <input type="password" placeholder="Passwort" className="border p-2 w-full" />
        <select className="border p-2 w-full">
          <option value="admin">Admin (Abo-Inhaber)</option>
          <option value="staff">Mitarbeiter</option>
        </select>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2">Konto erstellen</button>
      </form>
    </main>
  );
}