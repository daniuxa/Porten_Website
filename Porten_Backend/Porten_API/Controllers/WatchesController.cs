using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Porten_API.Controllers
{
    [ApiController]
    [Produces("application/json", "application/xml")]
    public class WatchesController : ControllerBase
    {
        private readonly IWatchService _watchService;

        public WatchesController(IWatchService watchService)
        {
            this._watchService = watchService ?? throw new ArgumentNullException(nameof(watchService));
        }

        [HttpGet("api/watches")]
        public async Task<IActionResult> GetWathes()
        {
            return Ok(await _watchService.GetWatchesAsync());
        }
    }
}
