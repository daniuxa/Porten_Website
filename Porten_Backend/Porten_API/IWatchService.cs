namespace Porten_API
{
    public interface IWatchService
    {
        Task<IEnumerable<Watch>> GetWatchesAsync();
    }
}
