using System;
using System.Collections.Generic;
using System.Text;

namespace Banco
{
    class Transaccion
    {
        //Program p = new Program();
        List<string> cliente = new List<string>();
        List<string> cuentas = new List<string>();
        List<string> moneda = new List<string>();
        List<double> monto = new List<double>();
        List<int> posiciones = new List<int>();
        private int IniciarListas(string DNI)
        {
            int i = 0, j = 1;
            foreach (var item in Program.Ldni)
            {
                if (item == DNI)
                {
                    Console.WriteLine($"[{j}] {Program.Lcuenta[i]} MONEDA-> {Program.Lmoneda[i]}");
                    cliente.Add(Program.Lnombre[i] + " " + Program.Lapellido[i]);
                    cuentas.Add(Program.Lcuenta[i]);
                    moneda.Add(Program.Lmoneda[i]);
                    monto.Add(double.Parse(Program.Lmonto[i]));
                    posiciones.Add(i);
                    j++;
                }
                i++;
            }
            Console.Write("SELECCIONE CUENTA: ");
            return j;
        }
        private void Guardar(int nro,string DNI)
        {
            Program.Lmonto[posiciones[nro - 1]] = monto[nro - 1].ToString();
            Program.Guardar();
            IniciarListas(DNI);

            Console.WriteLine($"CLIENTE: {Program.Lnombre[posiciones[nro - 1]]} {Program.Lapellido[posiciones[nro - 1]]}");
            Console.WriteLine($"SALDO ACTUAL: {Program.Lmonto[posiciones[nro - 1]]} MONEDA: {Program.Lmoneda[posiciones[nro - 1]]}");
        }
        public void Consultar(string DNI)
        {
            int j = IniciarListas(DNI);
            try
            {

                int cta = int.Parse(Console.ReadLine());
                if (cta < j && cta > 0)
                {
                    Console.WriteLine($"CLIENTE: {cliente[cta - 1]}");
                    Console.WriteLine($"SALDO ACTUAL: {monto[cta - 1]} MONEDA: {moneda[cta - 1]}");
                }
                else
                {
                    Console.WriteLine("****** ERROR DE CUENTA");
                }
            }
            catch (Exception)
            {
                Console.WriteLine("****** ERROR DE CUENTA");
            }

        }
        public void Depositar(string DNI)
        {
            int j = IniciarListas(DNI);
            try
            {

                int cta = int.Parse(Console.ReadLine());
                if (cta < j && cta > 0)
                {
                    Console.Write("INGRESE MONTO: ");
                    try
                    {
                        double montos = double.Parse(Console.ReadLine());
                        if (montos < 0)
                        {
                            Console.WriteLine("****** MONTO NEGATIVO");
                        }
                        else
                        {
                            monto[cta - 1] = monto[cta - 1] + montos;
                            Guardar(cta,DNI);
                        }


                    }
                    catch (Exception)
                    {
                        Console.WriteLine("****** ERROR MONTO INCORRECTO");
                    }

                }
                else
                {
                    Console.WriteLine("****** ERROR DE CUENTA");
                }
            }
            catch (Exception)
            {
                Console.WriteLine("****** ERROR DE CUENTA");
            }

        }
        public void Retirar(string DNI)
        {
            int j = IniciarListas(DNI);
            try
            {
                int cta = int.Parse(Console.ReadLine());
                if (cta < j && cta > 0)
                {
                    Console.Write("INGRESE MONTO: ");
                    try
                    {
                        double montos = double.Parse(Console.ReadLine());
                        if (montos > monto[cta - 1])
                        {
                            Console.WriteLine("****** MONTO MAS DE LO QUE TIENE");
                        }
                        else
                        {
                            monto[cta - 1] = monto[cta - 1] - montos;
                            Guardar(cta,DNI);
                        }


                    }
                    catch (Exception)
                    {
                        Console.WriteLine("****** ERROR MONTO INCORRECTO");
                    }

                    Console.WriteLine($"CLIENTE: {cliente[cta - 1]}");
                    Console.WriteLine($"SALDO ACTUAL: {monto[cta - 1]} MONEDA: {moneda[cta - 1]}");
                }
                else
                {
                    Console.WriteLine("****** ERROR DE CUENTA");
                }
            }
            catch (Exception)
            {
                Console.WriteLine("****** ERROR DE CUENTA");
            }


        }
        public void Transferir(string DNI)
        {
            string destino = "";
            int j = IniciarListas(DNI);
            try
            {
                int i=0, cta = int.Parse(Console.ReadLine());
                Console.Write("INGRESE CUENTA DE DESTINO: ");
                destino = Console.ReadLine();

                foreach (var item in Program.Lcuenta)
                {
                    if (destino == item)
                    {
                        if (moneda[cta - 1] == Program.Lmoneda[i])
                        {
                            Console.WriteLine($"CLIENTE DESTINO: {Program.Lnombre[i]} {Program.Lapellido[i]}");
                            Console.Write("MONTO: ");
                            double monto1 = double.Parse(Console.ReadLine());
                            if (monto1 > 0)
                            {
                                if(monto1< monto[cta - 1])
                                {
                                    Program.Lmonto[i]= (double.Parse(Program.Lmonto[i])+monto1).ToString();
                                    monto[cta - 1] = monto[cta - 1] - monto1;
                                    Guardar(cta,DNI);

                                }
                                else
                                {
                                    Console.WriteLine("****** ERROR SALDO INSUFICIENTE");
                                }
                            }
                            else
                            {
                                Console.WriteLine("****** ERROR MONTO NEGATIVO");
                            }
                        }
                        else
                        {
                            Console.WriteLine("****** Error cuenta destino esta en otra moneda");
                        }
                    }
                    i++;
                }

            }
            catch (Exception) {
                Console.WriteLine("****** ERROR DE CUENTA");                

            }
        }

    }
}
