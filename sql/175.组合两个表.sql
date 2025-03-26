--
-- @lc app=leetcode.cn id=175 lang=mysql
--
-- [175] 组合两个表
--

-- @lc code=start
# Write your MySQL query statement below
select
firstName
,lastName
,city
,state
from person a left join address b on a.PersonId = b.PersonId

-- @lc code=end

