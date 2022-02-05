using System.Runtime.InteropServices;

public static class WaxLogin
{
    [DllImport("__Internal")]
    public static extern void Login();
}