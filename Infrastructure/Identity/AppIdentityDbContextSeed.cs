using Core.Entities.Identity;
using Microsoft.AspNetCore.Identity;
using System.Linq;
using System.Threading.Tasks;

namespace Infrastructure.Identity
{
    public class AppIdentityDbContextSeed
    {
        public static async Task SeedUserAsync(UserManager<AppUser> userManager)
        {
            if (!userManager.Users.Any())
            {
                var user = new AppUser()
                {
                    DisplayName = "Ahmed",
                    Email = "benhammoudaahmed95@gmail.com",
                    UserName = "benhammoudaahmed95@gmail.com",
                    Address = new Address()
                    {
                        FirstName = "Ahmed",
                        LastName = "Ben Hammouda",
                        Street = "14 rue el hakim Monji Ben Cheikh",
                        City = "Borj Louzir",
                        State = "Ariana",
                        ZipCode = "2073"
                    }
                };

                await userManager.CreateAsync(user, "Bavari95#");
            }
        }
    }
}
