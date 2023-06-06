using Microsoft.EntityFrameworkCore;

namespace Porten_API
{
    public class WatchService : IWatchService
    {
        private readonly WatchDbContext _watchDbContext;

        public WatchService(WatchDbContext watchDbContext)
        {
            this._watchDbContext = watchDbContext ?? throw new ArgumentNullException(nameof(watchDbContext));
        }
        public async Task<IEnumerable<Watch>> GetWatchesAsync()
        {
            return await _watchDbContext.Watches.ToListAsync();
        }
    }
}
