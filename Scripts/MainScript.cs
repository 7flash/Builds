using UnityEngine;

public class MainScript : MonoBehaviour
{
    void Start()
    {
        GameObject.Find("Button").GetComponent<UnityEngine.UI.Button>().onClick.AddListener(() => {
            DoLogin();
        });
    }

    void DoLogin() {
        Debug.Log("DoLogin");

        WaxLogin.Login();
    }

    public void LoginSuccess(string accountName) {
        Debug.Log("LoginSuccess");

        Debug.Log(accountName);
    }

    public void LoginFailure(string error) {
        Debug.Log("LoginFailure");

        Debug.Log(error);
    }
}