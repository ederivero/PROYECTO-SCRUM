using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace Banco
{
    class Program
    {
        static Program p = new Program();
        static Transaccion transaccion = new Transaccion();
        public static List<string> Ldni = new List<string>();
        public static List<string> Lnombre = new List<string>();
        public static List<string> Lapellido = new List<string>();
        public static List<string> Lcuenta = new List<string>();
        public static List<string> Lmonto = new List<string>();
        public static List<string> Lmoneda = new List<string>();
        public static string url = "C:\\Users\\ederi\\OneDrive\\Documentos\\GitHub\\PROYECTO-SCRUM\\bd.txt";
        public static string url2 = "C:\\Users\\ederi\\OneDrive\\Documentos\\GitHub\\PROYECTO-SCRUM\\bd(1).txt";

        static void Main(string[] args)
        {
            LeerArchivo();
            string rpta = "";
            Console.WriteLine("INGRESE SU DNI");
            string dni = Console.ReadLine();
            rpta = EncontrarCliente(dni);
            if (rpta != "")
            {
                Menu(rpta);
            }
        }
        private static void LeerArchivo()
        {
            string[] strLineas = File.ReadAllLines(url);
            string[] campos;
            for (int i = 1; i < strLineas.Length; i++)
            {
                campos=strLineas[i].Split(",".ToCharArray());
                Ldni.Add(campos[0]);
                Lnombre.Add(campos[1]);
                Lapellido.Add(campos[2]);
                Lcuenta.Add(campos[3]);
                Lmonto.Add(campos[4]);
                Lmoneda.Add(campos[5]);
            }
        }

        private static string EncontrarCliente(string DNI)
        {
            int i = 0;
            foreach (var item in Ldni)
            {
                if(item==DNI)
                {
                    Console.WriteLine($"BIENVENIDO {Lnombre[i]}");
                    return DNI;
                }
                
                i++;
            }
            Console.WriteLine("CLIENTE NO ENCONTRADO");
            return "";
        }

        static void Menu(string DNI)
        {
            int opc;
            do
            {
                Console.WriteLine("-----------------------------");
                Console.WriteLine("-  CAJERO AUTOMATICO PANBIF -");
                Console.WriteLine("-----------------------------");
                Console.WriteLine("1. CONSULTAR SALDO");
                Console.WriteLine("2. DEPOSITAR");
                Console.WriteLine("3. RETIRAR");
                Console.WriteLine("4. TRANSFERENCIA");
                Console.WriteLine("0. TERMINAR");
                Console.WriteLine("INGRESE OPCION");
                opc = int.Parse(Console.ReadLine());

                switch (opc)
                {
                    case 1:
                        transaccion.Consultar(DNI);
                        break;
                    case 2:
                        transaccion.Depositar(DNI);
                        break;
                    case 3:
                        transaccion.Retirar(DNI);
                        break;
                    case 4:
                        transaccion.Transferir(DNI);
                        break;
                    case 0:

                        break;
                    default:
                        Console.WriteLine("-  OPCION INCORRECTA  -");
                        break;

                }
            } while (opc != 0);

        }
        public static void Guardar()
        {
            try
            {
                StreamWriter sw = new StreamWriter(url, false, Encoding.ASCII);
                sw.WriteLine("dni,nombres,apellidos,cuenta,monto,moneda");
                int i = 0;
                foreach (var item in Ldni)
                {
                    sw.WriteLine(Ldni[i]+","+Lnombre[i] + "," +Lapellido[i] + "," +Lcuenta[i] + "," +Lmonto[i] + "," +Lmoneda[i]);
                    i++;
                }
                sw.Close();

            }
            catch (Exception)
            {
                Console.WriteLine("ERROR AL GUARDAR ARCHIVO :/");

            }
        }

    }
}
